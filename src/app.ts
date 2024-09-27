// import { RandomColorTheme } from './classes/RandomColorTheme.js'
import { RandomColorTheme } from './classes/RandomColorTheme.js'
try {
  const colorTheme = new RandomColorTheme()

  const theme = colorTheme.generateColorTheme()

  console.log('THEME: ' + theme.colorTheme)
  console.log('NUMBER: ' + theme.colorsInTheme.length)
  for (const color of theme.colorsInTheme) {
    console.log(color.hue)
    // console.log(color.hsl)
  }
  theme.sortColorsByHue()
  console.log('sorted')
  for (const color of theme.colorsInTheme) {
    console.log(color.hue)
    // console.log(color.hsl)
  }
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message)
  }
}
