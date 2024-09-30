// import { RandomColorTheme } from './classes/RandomColorTheme.js'
import { SplitComplementary } from './classes/SplitComplementary.js'
try {
  const colorTheme = new SplitComplementary()

  const theme = colorTheme.generateColorTheme(3)

  console.log('THEME: ' + theme.colorTheme)
  console.log('NUMBER: ' + theme.colorsInTheme.length)
  for (const color of theme.colorsInTheme) {
    console.log(color.hsl)
    // console.log(color.hsl)
  }
  theme.sortColorsByHue()
  console.log('sorted')
  for (const color of theme.colorsInTheme) {
    console.log(color.hsl)
    // console.log(color.hsl)
  }
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message)
  }
}
