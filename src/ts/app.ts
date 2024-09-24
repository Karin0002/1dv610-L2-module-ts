
import { RandomColorTheme } from "./classes/RandomColorTheme.js";
const colorTheme = new RandomColorTheme()

const theme = colorTheme.generateColorTheme()

console.log('THEME: ' + theme.colorScheme)
console.log('NUMBER: ' + theme.colors.length)
for (let i = 0; i < theme.colors.length; i++) {
  const color = theme.colors[i]
  console.log(color.hsl)
}
