param(
  [string]$SourcePath = (Join-Path $PSScriptRoot "..\public\brand\identity\astrid-sanders-monogram.png"),
  [string]$AppDirectory = (Join-Path $PSScriptRoot "..\app")
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function New-IconPngBytes {
  param(
    [System.Drawing.Image]$Source,
    [int]$Size
  )

  $bitmap = New-Object System.Drawing.Bitmap(
    $Size,
    $Size,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $stream = New-Object System.IO.MemoryStream

  try {
    $graphics.Clear([System.Drawing.Color]::FromArgb(255, 255, 250, 244))
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

    $inset = [Math]::Max(1, [int][Math]::Round($Size * 0.055))
    $contentSize = $Size - (2 * $inset)
    $graphics.DrawImage(
      $Source,
      (New-Object System.Drawing.Rectangle($inset, $inset, $contentSize, $contentSize))
    )

    $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
    return ,$stream.ToArray()
  } finally {
    $stream.Dispose()
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

function Write-MultiSizeIcon {
  param(
    [System.Drawing.Image]$Source,
    [string]$Destination,
    [int[]]$Sizes
  )

  $entries = foreach ($size in $Sizes) {
    [PSCustomObject]@{
      Size = $size
      Bytes = New-IconPngBytes -Source $Source -Size $size
    }
  }

  $stream = New-Object System.IO.MemoryStream
  $writer = New-Object System.IO.BinaryWriter($stream)

  try {
    $writer.Write([uint16]0)
    $writer.Write([uint16]1)
    $writer.Write([uint16]$entries.Count)

    $offset = 6 + (16 * $entries.Count)
    foreach ($entry in $entries) {
      $dimension = if ($entry.Size -ge 256) { [byte]0 } else { [byte]$entry.Size }
      $writer.Write($dimension)
      $writer.Write($dimension)
      $writer.Write([byte]0)
      $writer.Write([byte]0)
      $writer.Write([uint16]1)
      $writer.Write([uint16]32)
      $writer.Write([uint32]$entry.Bytes.Length)
      $writer.Write([uint32]$offset)
      $offset += $entry.Bytes.Length
    }

    foreach ($entry in $entries) {
      $writer.Write([byte[]]$entry.Bytes)
    }

    $writer.Flush()
    [System.IO.File]::WriteAllBytes($Destination, $stream.ToArray())
  } finally {
    $writer.Dispose()
    $stream.Dispose()
  }
}

$resolvedSource = [System.IO.Path]::GetFullPath($SourcePath)
$resolvedAppDirectory = [System.IO.Path]::GetFullPath($AppDirectory)

if (-not (Test-Path -LiteralPath $resolvedSource)) {
  throw "Identity monogram not found at $resolvedSource"
}

New-Item -ItemType Directory -Force -Path $resolvedAppDirectory | Out-Null
$source = [System.Drawing.Image]::FromFile($resolvedSource)

try {
  Write-MultiSizeIcon `
    -Source $source `
    -Destination (Join-Path $resolvedAppDirectory "favicon.ico") `
    -Sizes @(16, 32, 48, 64, 128, 256)

  [System.IO.File]::WriteAllBytes(
    (Join-Path $resolvedAppDirectory "icon.png"),
    (New-IconPngBytes -Source $source -Size 256)
  )
  [System.IO.File]::WriteAllBytes(
    (Join-Path $resolvedAppDirectory "apple-icon.png"),
    (New-IconPngBytes -Source $source -Size 180)
  )
} finally {
  $source.Dispose()
}

Write-Output "favicon.ico: 16, 32, 48, 64, 128, 256px"
Write-Output "icon.png: 256x256"
Write-Output "apple-icon.png: 180x180"
