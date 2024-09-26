import { RandomColorTheme } from './classes/RandomColorTheme.js'
const colorTheme = new RandomColorTheme()

const theme = colorTheme.generateColorTheme()

console.log('THEME: ' + theme.colorTheme)
console.log('NUMBER: ' + theme.colorsInTheme.length)
for (const color of theme.colorsInTheme) {
  console.log(color.hsl)
}
