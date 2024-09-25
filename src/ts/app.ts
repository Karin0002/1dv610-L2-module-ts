import { RandomColorTheme } from './classes/RandomColorTheme.js'
const colorTheme = new RandomColorTheme()

const theme = colorTheme.generateColorTheme()

console.log('THEME: ' + theme.colorTheme)
console.log('NUMBER: ' + theme.colors.length)
for (const color of theme.colors) {
  console.log(color.hsl)
}
