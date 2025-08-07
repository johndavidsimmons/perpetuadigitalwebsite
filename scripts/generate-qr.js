#!/usr/bin/env node

const QRCode = require('qrcode')
const fs = require('fs')
const path = require('path')

async function generateQRCode(text, options = {}) {
  const {
    output = 'qrcode.png',
    format = 'png',
    width = 300,
    margin = 4,
    color = { dark: '#000000', light: '#FFFFFF' },
  } = options

  try {
    const outputPath = path.resolve(output)

    if (format === 'svg') {
      const svgString = await QRCode.toString(text, {
        type: 'svg',
        width,
        margin,
        color,
      })
      fs.writeFileSync(outputPath, svgString)
    } else {
      await QRCode.toFile(outputPath, text, {
        width,
        margin,
        color,
      })
    }

    console.log(`✅ QR code generated successfully: ${outputPath}`)
    console.log(`📄 Content: ${text}`)
    console.log(`📏 Size: ${width}x${width}px`)
  } catch (error) {
    console.error('❌ Error generating QR code:', error.message)
    process.exit(1)
  }
}

function showHelp() {
  console.log(`
🔳 QR Code Generator

Usage:
  node scripts/generate-qr.js <text> [options]

Examples:
  node scripts/generate-qr.js "https://perpetua.digital"
  node scripts/generate-qr.js "Hello World" --output=hello.png --width=500
  node scripts/generate-qr.js "Contact info" --format=svg --output=contact.svg

Options:
  --output=<file>     Output filename (default: qrcode.png)
  --format=<format>   Output format: png, svg (default: png)
  --width=<pixels>    QR code width in pixels (default: 300)
  --margin=<blocks>   Margin in QR code blocks (default: 4)
  --dark=<color>      Dark color hex code (default: #000000)
  --light=<color>     Light color hex code (default: #FFFFFF)
  --help              Show this help message
`)
}

function parseArgs() {
  const args = process.argv.slice(2)

  if (args.length === 0 || args.includes('--help')) {
    showHelp()
    process.exit(0)
  }

  const text = args[0]
  const options = {}

  args.slice(1).forEach((arg) => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.substring(2).split('=')

      switch (key) {
        case 'output':
          options.output = value
          break
        case 'format':
          options.format = value
          break
        case 'width':
          options.width = parseInt(value, 10)
          break
        case 'margin':
          options.margin = parseInt(value, 10)
          break
        case 'dark':
          options.color = { ...options.color, dark: value }
          break
        case 'light':
          options.color = { ...options.color, light: value }
          break
      }
    }
  })

  return { text, options }
}

async function main() {
  const { text, options } = parseArgs()
  await generateQRCode(text, options)
}

if (require.main === module) {
  main()
}

module.exports = { generateQRCode }
