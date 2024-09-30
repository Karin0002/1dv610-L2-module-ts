Classes:
- Analogous
- Color
- ColorThemeData
- Complementary
- CSSColorSetter
- HTMLColorSwatch
- Monochrome
- RandomColorTheme
- SplitComplementary
- Triadic

Direct access:
- Analogous
- Complementary
- CSSColorSetter
- HTMLColorSwatch
- Monochrome
- RandomColorTheme
- SplitComplementary
- Triadic

Methods and properties:
- Analogous
    - generateColorTheme(numberOfColors : number) : ColorThemeData
        - numberOfColors: 3 - 5
    - Analogous () : Analogous

- Color
    - .hue : number
    - .saturation : number
    - .lightness : number
    - -hsl : string

- ColorThemeData
    - colorTheme : string
    - numberOfColorsInTheme : number
    - colorsInTheme : Color[]
    - sortColorsByHue() : void
    - sortColorsBySaturation() : void
    - sortColorsByLightness() : void

- Complementary
    - generateColorTheme(numberOfColors : number) : ColorThemeData
        - numberOfColors: 2 - 4
    - Complementary () : Complementary

- CSSColorSetter
    - setCSSColorPropertyOn(HTMLElement : HTMLElement, color: Color) : void
    - setCSSBackgroundColorPropertyOn(HTMLElement : HTMLElement, color: Color) : void
    - setCSSBorderPropertyOn(HTMLElement : HTMLElement, color: Color) : void
    - setCSSOutlinePropertyOn(HTMLElement : HTMLElement, color: Color) : void
    - setCSSTextDecorationPropertyOn(HTMLElement : HTMLElement, color: Color) : void
    - CSSColorSetter () : CSSColorSetter

- HTMLColorSwatch
    - turnElementIntoColorSwatch(HTMLElement: HTMLElement, color: Color) : void
    - HTMLColorSwatch () : HTMLColorSwatch

- Monochrome
    - generateColorTheme(numberOfColors : number) : ColorThemeData
        - numberOfColors: 2 - 5
    - Monochrome () : Monochrome

- RandomColorTheme
    - generateColorTheme(numberOfColors : number?) : ColorThemeData
        - (optional) numberOfColors: 2 - 5
    - RandomColorTheme () : RandomColorTheme

- SplitComplementary
    - generateColorTheme(numberOfColors : number) : ColorThemeData
        - numberOfColors: 3 - 5
    - SplitComplementary () : SplitComplementary

- Triadic
    - generateColorTheme(numberOfColors : number) : ColorThemeData
        - numberOfColors: 3 - 5
    - Triadic () : Triadic


# RENAME APP.TS TO INDEX.TS

# IN INDEX.TS:
## export * from './classes/Analogous.js'
## export * from './classes/Complementary.js'
## export * from './classes/CSSColorSetter.js'
## export * from './classes/HTMLColorSwatch.js'
## export * from './classes/Monochrome.js'
## export * from './classes/RandomColorTheme.js'
## export * from './classes/SplitComplementary.js'
## export * from './classes/Triadic.js'

# CHANGE PACKAGE JSON SO IT IS CORRECT REGARDING FACTS AND NPM
