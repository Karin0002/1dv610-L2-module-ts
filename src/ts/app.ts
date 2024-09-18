// console.log('Hello world you!')
// import { Monochrome } from './classes/Monochrome.js'
import { Triadic } from "./classes/Triadic.js"
// const colorTheme = new Triadic()
// const colorTheme = new Monochrome()

// const theme = colorTheme.generateColorTheme(5)
// console.log(theme)

// const color1 = theme.colors[0]
// console.log(color1.hsl)

// const color2 = theme.colors[1]
// console.log(color2.hsl)

// const color3 = theme.colors[2]
// console.log(color3.hsl)

// const color4 = theme.colors[3]
// console.log(color4.hsl)

// const color5 = theme.colors[4]
// console.log(color5.hsl)

const colorTheme2 = new Triadic()
// const colorTheme2 = new Monochrome()

const theme2 = colorTheme2.generateColorTheme(4)
console.log(theme2)

const color12 = theme2.colors[0]
console.log(color12.hsl)

const color22 = theme2.colors[1]
console.log(color22.hsl)

const color32 = theme2.colors[2]
console.log(color32.hsl)

const color42 = theme2.colors[3]
console.log(color42.hsl)

// const color52 = theme.colors[4]
// console.log(color52.hsl)
