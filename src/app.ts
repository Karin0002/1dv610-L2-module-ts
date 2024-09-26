// import { RandomColorTheme } from './classes/RandomColorTheme.js'
import { RandomColorTheme } from './classes/RandomColorTheme.js'
const colorTheme = new RandomColorTheme()

const number = 4
const theme = colorTheme.generateColorTheme(number)

console.log('THEME: ' + theme.colorTheme)
console.log('NUMBER: ' + theme.colorsInTheme.length)
for (const color of theme.colorsInTheme) {
  console.log(color.hsl)
  console.log(color.hue)
  console.log(color.hue)
}
console.log(number)
