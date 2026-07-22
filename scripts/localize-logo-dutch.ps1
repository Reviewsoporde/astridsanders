param(
  [string]$SourcePath = (Join-Path $PSScriptRoot "..\logo_design-en.png"),
  [string]$OutputPath = (Join-Path $PSScriptRoot "..\logo_design.png")
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$DutchDescriptor = "LEEFSTIJLCOACH"
$DutchTagline = "HELDERHEID. GROEI. RICHTING."
$Forest = [System.Drawing.Color]::FromArgb(255, 32, 53, 44)

function Copy-BackgroundPatch {
  param(
    [System.Drawing.Graphics]$Graphics,
    [System.Drawing.Bitmap]$Reference,
    [System.Drawing.Rectangle]$Target,
    [System.Drawing.Point]$SampleOrigin
  )

  $source = New-Object System.Drawing.Rectangle(
    $SampleOrigin.X,
    $SampleOrigin.Y,
    $Target.Width,
    $Target.Height
  )

  $Graphics.DrawImage(
    $Reference,
    $Target,
    $source,
    [System.Drawing.GraphicsUnit]::Pixel
  )
}

function Get-TrackedTextWidth {
  param(
    [System.Drawing.Graphics]$Graphics,
    [string]$Text,
    [System.Drawing.Font]$Font,
    [System.Drawing.StringFormat]$Format,
    [float]$Tracking
  )

  $width = 0.0
  foreach ($character in $Text.ToCharArray()) {
    $size = $Graphics.MeasureString([string]$character, $Font, 1000, $Format)
    $width += $size.Width
  }

  if ($Text.Length -gt 1) {
    $width += $Tracking * ($Text.Length - 1)
  }

  return [float]$width
}

function Draw-TrackedCenteredText {
  param(
    [System.Drawing.Graphics]$Graphics,
    [string]$Text,
    [float]$CenterX,
    [float]$LayoutY,
    [float]$FontSize,
    [float]$Tracking,
    [System.Drawing.Color]$Color
  )

  $font = New-Object System.Drawing.Font(
    "Century Gothic",
    $FontSize,
    [System.Drawing.FontStyle]::Regular,
    [System.Drawing.GraphicsUnit]::Pixel
  )
  $brush = New-Object System.Drawing.SolidBrush($Color)
  $format = [System.Drawing.StringFormat]::GenericTypographic.Clone()
  $format.FormatFlags = $format.FormatFlags -bor [System.Drawing.StringFormatFlags]::MeasureTrailingSpaces

  try {
    $width = Get-TrackedTextWidth `
      -Graphics $Graphics `
      -Text $Text `
      -Font $font `
      -Format $format `
      -Tracking $Tracking
    $x = $CenterX - ($width / 2)

    foreach ($character in $Text.ToCharArray()) {
      $glyph = [string]$character
      $Graphics.DrawString(
        $glyph,
        $font,
        $brush,
        [single]$x,
        [single]$LayoutY,
        $format
      )
      $size = $Graphics.MeasureString($glyph, $font, 1000, $format)
      $x += $size.Width + $Tracking
    }
  } finally {
    $format.Dispose()
    $brush.Dispose()
    $font.Dispose()
  }
}

$resolvedSource = [System.IO.Path]::GetFullPath($SourcePath)
$resolvedOutput = [System.IO.Path]::GetFullPath($OutputPath)

if (-not (Test-Path -LiteralPath $resolvedSource)) {
  throw "English brand board not found at $resolvedSource"
}

$outputDirectory = Split-Path -Parent $resolvedOutput
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$source = [System.Drawing.Bitmap]::FromFile($resolvedSource)
$reference = New-Object System.Drawing.Bitmap($source)
$localized = New-Object System.Drawing.Bitmap(
  $source.Width,
  $source.Height,
  [System.Drawing.Imaging.PixelFormat]::Format24bppRgb
)
$graphics = [System.Drawing.Graphics]::FromImage($localized)

try {
  $graphics.DrawImageUnscaled($source, 0, 0)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  # Primary logo. The patches are sampled from the untouched paper texture below.
  Copy-BackgroundPatch `
    -Graphics $graphics `
    -Reference $reference `
    -Target (New-Object System.Drawing.Rectangle(550, 344, 350, 38)) `
    -SampleOrigin (New-Object System.Drawing.Point(550, 438))
  Copy-BackgroundPatch `
    -Graphics $graphics `
    -Reference $reference `
    -Target (New-Object System.Drawing.Rectangle(493, 394, 470, 34)) `
    -SampleOrigin (New-Object System.Drawing.Point(493, 438))

  Draw-TrackedCenteredText `
    -Graphics $graphics `
    -Text $DutchDescriptor `
    -CenterX 725.5 `
    -LayoutY 348 `
    -FontSize 22 `
    -Tracking 12 `
    -Color $Forest
  Draw-TrackedCenteredText `
    -Graphics $graphics `
    -Text $DutchTagline `
    -CenterX 728 `
    -LayoutY 398 `
    -FontSize 14 `
    -Tracking 9 `
    -Color $Forest

  # Horizontal website lockup.
  Copy-BackgroundPatch `
    -Graphics $graphics `
    -Reference $reference `
    -Target (New-Object System.Drawing.Rectangle(300, 638, 190, 30)) `
    -SampleOrigin (New-Object System.Drawing.Point(300, 704))
  Copy-BackgroundPatch `
    -Graphics $graphics `
    -Reference $reference `
    -Target (New-Object System.Drawing.Rectangle(260, 672, 272, 25)) `
    -SampleOrigin (New-Object System.Drawing.Point(260, 704))

  Draw-TrackedCenteredText `
    -Graphics $graphics `
    -Text $DutchDescriptor `
    -CenterX 396 `
    -LayoutY 641 `
    -FontSize 11 `
    -Tracking 5.5 `
    -Color $Forest
  Draw-TrackedCenteredText `
    -Graphics $graphics `
    -Text $DutchTagline `
    -CenterX 396 `
    -LayoutY 673 `
    -FontSize 9 `
    -Tracking 4.5 `
    -Color $Forest

  # Stacked website lockup.
  Copy-BackgroundPatch `
    -Graphics $graphics `
    -Reference $reference `
    -Target (New-Object System.Drawing.Rectangle(728, 728, 165, 24)) `
    -SampleOrigin (New-Object System.Drawing.Point(728, 776))
  Copy-BackgroundPatch `
    -Graphics $graphics `
    -Reference $reference `
    -Target (New-Object System.Drawing.Rectangle(690, 752, 245, 23)) `
    -SampleOrigin (New-Object System.Drawing.Point(690, 776))

  Draw-TrackedCenteredText `
    -Graphics $graphics `
    -Text $DutchDescriptor `
    -CenterX 811 `
    -LayoutY 728 `
    -FontSize 10 `
    -Tracking 5 `
    -Color $Forest
  Draw-TrackedCenteredText `
    -Graphics $graphics `
    -Text $DutchTagline `
    -CenterX 811 `
    -LayoutY 751 `
    -FontSize 9 `
    -Tracking 3.2 `
    -Color $Forest

  $localized.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output ("Dutch brand board: " + $resolvedOutput)
} finally {
  $graphics.Dispose()
  $localized.Dispose()
  $reference.Dispose()
  $source.Dispose()
}
