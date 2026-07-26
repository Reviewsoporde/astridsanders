param(
  [string]$SourcePath = (Join-Path $PSScriptRoot "..\new_logo_updated_design.png"),
  [string]$OutputDirectory = (Join-Path $PSScriptRoot "..\public\brand\identity")
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Get-CornerBackgroundColor {
  param([System.Drawing.Bitmap]$Bitmap)

  $sampleSize = [Math]::Max(3, [Math]::Min(12, [Math]::Floor([Math]::Min($Bitmap.Width, $Bitmap.Height) / 8)))
  $red = 0L
  $green = 0L
  $blue = 0L
  $count = 0L
  $origins = @(
    @(0, 0),
    @(($Bitmap.Width - $sampleSize), 0),
    @(0, ($Bitmap.Height - $sampleSize)),
    @(($Bitmap.Width - $sampleSize), ($Bitmap.Height - $sampleSize))
  )

  foreach ($origin in $origins) {
    for ($y = $origin[1]; $y -lt ($origin[1] + $sampleSize); $y++) {
      for ($x = $origin[0]; $x -lt ($origin[0] + $sampleSize); $x++) {
        $pixel = $Bitmap.GetPixel($x, $y)
        $red += $pixel.R
        $green += $pixel.G
        $blue += $pixel.B
        $count++
      }
    }
  }

  return [System.Drawing.Color]::FromArgb(
    255,
    [int]($red / $count),
    [int]($green / $count),
    [int]($blue / $count)
  )
}

function Export-TransparentLogoCrop {
  param(
    [System.Drawing.Bitmap]$Source,
    [System.Drawing.Rectangle]$Bounds,
    [string]$Destination,
    [int]$Padding = 12,
    [switch]$Square,
    [switch]$ClearBottomLeftDecoration
  )

  $crop = New-Object System.Drawing.Bitmap(
    $Bounds.Width,
    $Bounds.Height,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($crop)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.DrawImage(
    $Source,
    (New-Object System.Drawing.Rectangle(0, 0, $Bounds.Width, $Bounds.Height)),
    $Bounds,
    [System.Drawing.GraphicsUnit]::Pixel
  )
  $graphics.Dispose()

  $background = Get-CornerBackgroundColor -Bitmap $crop
  $transparentDistance = 14
  $opaqueDistance = 48

  $minX = $crop.Width
  $minY = $crop.Height
  $maxX = -1
  $maxY = -1

  for ($y = 0; $y -lt $crop.Height; $y++) {
    for ($x = 0; $x -lt $crop.Width; $x++) {
      $pixel = $crop.GetPixel($x, $y)
      $redDelta = [int]$pixel.R - [int]$background.R
      $greenDelta = [int]$pixel.G - [int]$background.G
      $blueDelta = [int]$pixel.B - [int]$background.B
      $distance = [Math]::Sqrt(
        ($redDelta * $redDelta) +
        ($greenDelta * $greenDelta) +
        ($blueDelta * $blueDelta)
      )

      $clearBoardDecoration =
        $ClearBottomLeftDecoration -and
        $x -lt 145 -and
        $y -gt (395 + [int][Math]::Round($x * 0.42))

      if ($clearBoardDecoration -or $distance -le $transparentDistance) {
        $alpha = 0
      } elseif ($distance -ge $opaqueDistance) {
        $alpha = 255
      } else {
        $alpha = [int](255 * (($distance - $transparentDistance) / ($opaqueDistance - $transparentDistance)))
      }

      if ($alpha -eq 0) {
        $foreground = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
      } elseif ($alpha -eq 255) {
        $foreground = [System.Drawing.Color]::FromArgb(255, $pixel.R, $pixel.G, $pixel.B)
      } else {
        $alphaRatio = $alpha / 255
        $red = [int][Math]::Round(($pixel.R - ((1 - $alphaRatio) * $background.R)) / $alphaRatio)
        $green = [int][Math]::Round(($pixel.G - ((1 - $alphaRatio) * $background.G)) / $alphaRatio)
        $blue = [int][Math]::Round(($pixel.B - ((1 - $alphaRatio) * $background.B)) / $alphaRatio)

        $red = [int][Math]::Max(0, [Math]::Min(255, $red))
        $green = [int][Math]::Max(0, [Math]::Min(255, $green))
        $blue = [int][Math]::Max(0, [Math]::Min(255, $blue))
        $foreground = [System.Drawing.Color]::FromArgb($alpha, $red, $green, $blue)
      }

      $crop.SetPixel($x, $y, $foreground)

      if ($alpha -gt 18) {
        $minX = [Math]::Min($minX, $x)
        $minY = [Math]::Min($minY, $y)
        $maxX = [Math]::Max($maxX, $x)
        $maxY = [Math]::Max($maxY, $y)
      }
    }
  }

  if ($maxX -lt $minX -or $maxY -lt $minY) {
    $crop.Dispose()
    throw "No visible logo pixels were found for $Destination"
  }

  $contentWidth = $maxX - $minX + 1
  $contentHeight = $maxY - $minY + 1
  $outputWidth = $contentWidth + (2 * $Padding)
  $outputHeight = $contentHeight + (2 * $Padding)

  if ($Square) {
    $outputSize = [Math]::Max($outputWidth, $outputHeight)
    $outputWidth = $outputSize
    $outputHeight = $outputSize
  }

  $output = New-Object System.Drawing.Bitmap(
    $outputWidth,
    $outputHeight,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $outputGraphics = [System.Drawing.Graphics]::FromImage($output)
  $outputGraphics.Clear([System.Drawing.Color]::Transparent)
  $outputGraphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $outputGraphics.DrawImage(
    $crop,
    (New-Object System.Drawing.Rectangle([int](($outputWidth - $contentWidth) / 2), [int](($outputHeight - $contentHeight) / 2), $contentWidth, $contentHeight)),
    (New-Object System.Drawing.Rectangle($minX, $minY, $contentWidth, $contentHeight)),
    [System.Drawing.GraphicsUnit]::Pixel
  )
  $outputGraphics.Dispose()

  $output.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output ((Split-Path -Leaf $Destination) + ": " + $output.Width + "x" + $output.Height)

  $output.Dispose()
  $crop.Dispose()
}

$resolvedSource = [System.IO.Path]::GetFullPath($SourcePath)
$resolvedOutput = [System.IO.Path]::GetFullPath($OutputDirectory)

if (-not (Test-Path -LiteralPath $resolvedSource)) {
  throw "Brand board not found at $resolvedSource"
}

New-Item -ItemType Directory -Force -Path $resolvedOutput | Out-Null
$source = [System.Drawing.Bitmap]::FromFile($resolvedSource)

try {
  Export-TransparentLogoCrop `
    -Source $source `
    -Bounds (New-Object System.Drawing.Rectangle(270, 0, 920, 450)) `
    -Destination (Join-Path $resolvedOutput "astrid-sanders-logo-centered-updated.png") `
    -Padding 14 `
    -ClearBottomLeftDecoration

  Export-TransparentLogoCrop `
    -Source $source `
    -Bounds (New-Object System.Drawing.Rectangle(35, 525, 570, 235)) `
    -Destination (Join-Path $resolvedOutput "astrid-sanders-logo-horizontal-updated.png") `
    -Padding 14

  Export-TransparentLogoCrop `
    -Source $source `
    -Bounds (New-Object System.Drawing.Rectangle(705, 515, 220, 245)) `
    -Destination (Join-Path $resolvedOutput "astrid-sanders-logo-stacked-updated.png") `
    -Padding 16

  Export-TransparentLogoCrop `
    -Source $source `
    -Bounds (New-Object System.Drawing.Rectangle(1090, 540, 225, 200)) `
    -Destination (Join-Path $resolvedOutput "astrid-sanders-monogram-updated.png") `
    -Padding 18 `
    -Square
} finally {
  $source.Dispose()
}
