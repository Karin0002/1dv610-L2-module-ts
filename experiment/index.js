import { Triadic, HTMLColorSwatch } from 'color-theme-generator'

const triadicGenerator = new Triadic()
const generatedTheme = triadicGenerator.generateColorTheme(3)

const swatchGenerator = new HTMLColorSwatch()
const generatedHTML = swatchGenerator.turnElementIntoColorSwatch(generatedTheme.colorsInTheme[0])

console.log(generatedHTML)
