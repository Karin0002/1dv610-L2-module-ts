# Objects, methods and properties

## Table of content
1. [Analogous](#analogous)
    1. [generateColorTheme()](#generatecolorthemenumberofcolors) 
2. [Complementary](#complementary)
    1. [generateColorTheme()](#generatecolorthemenumberofcolors-1) 
3. [Monochrome](#monochrome)
    1. [generateColorTheme()](#generatecolorthemenumberofcolors-2) 
4. [SplitComplementary](#splitcomplementary)
    1. [generateColorTheme()](#generatecolorthemenumberofcolors-3) 
5. [Triadic](#triadic)
    1. [generateColorTheme()](#generatecolorthemenumberofcolors-4) 
6. [RandomColorTheme](#randomcolortheme)
    1. [generateColorTheme()](#generatecolorthemenumberofcolors-5) 
7. [Color](#color)
    1. [hue](#hue)
    2. [saturation](#saturation)
    3. [lightness](#lightness)
    4. [hsl](#hsl)
8. [ColorThemeData](#colorthemedata)
    1. [colorTheme](#colortheme)
    2. [numberOfColorsInTheme](#numberofcolorsintheme)
    3. [colorsInTheme](#colorsintheme)
    4. [sortColorsByHue()](#sortcolorsbyhue)
    5. [sortColorsBySaturation()](#sortcolorsbysaturation)
    6. [sortColorsByLightness()](#sortcolorsbylightness)
9. [CSSColorSetter](#csscolorsetter)
    1. [setCSSColorPropertyOn()](#setcsscolorpropertyonhtmlelement-color)
    2. [setCSSBackgroundColorPropertyOn()](#setcssbackgroundcolorpropertyonhtmlelement-color)
    3. [setCSSBorderPropertyOn()](#setcssborderpropertyonhtmlelement-color)
    4. [setCSSOutlinePropertyOn()](#setcssoutlinepropertyonhtmlelement-color)
    5. [setCSSTextDecorationPropertyOn()](#setcsstextdecorationpropertyonhtmlelement-color)
10. [HTMLColorSwatch](#htmlcolorswatch)
    1. [turnElementIntoColorSwatch()](#turnelementintocolorswatchhtmlelement-color)



## Analogous

### generateColorTheme(numberOfColors)

#### Description:
Generates an analogous color theme with a certain amout of colors.

#### Arguments:
- numberOfColors

##### numberOfColors:
- Requried.
- Must be of type number.
- Value must be between 3 and 5.
- If value is 3 it will generate three colors with equal lightness
- If value is 4 it will generate three colors with equal lightness and a foruth lighter or darker color.
- If value is 5 it will generate three colors with equal lightness and a fourth lighter color and a fifth darker color.

#### Returns
ColorThemeData{}
  - A ColorThemeData object containing the generated color theme.

#### Throws error
- If numberOfColors is not present.
- If numberOfColors has invalid type.
- If numberOfColors has invalid value.

#### Example usage

```js
import { Analogous } from 'color-theme-generator'

try {
  const analogousTheme = new Analogous()
  const requestedNumberOfColors = 3  // Argument can be 3 - 5.
  const generatedColorTheme = analogousTheme.generateColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## Complementary

### generateColorTheme(numberOfColors)

#### Description:
Generates a complementary color theme with a certain amout of colors.

#### Arguments:
- numberOfColors

##### numberOfColors:
- Requried.
- Must be of type number.
- Value must be between 2 and 4.
- If value is 2 it will generate two colors with equal lightness
- If value is 3 it will generate two colors with equal lightness and a third lighter or darker color.
- If value is 4 it will generate two colors with equal lightness and a third lighter color and a fourth darker color.

#### Returns
ColorThemeData{}
  - A ColorThemeData object containg the generated color theme.

#### Throws error
- If numberOfColors is not present.
- If numberOfColors has invalid type.
- If numberOfColors has invalid value.

#### Example usage

```js
import { Complementary } from 'color-theme-generator'

try {
  const complementaryTheme = new Complementary()
  const requestedNumberOfColors = 2  // Argument can be 2 - 4.
  const generatedColorTheme = complementaryTheme.generateColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## Monochrome

### generateColorTheme(numberOfColors)

#### Description:
Generates a monochrome color theme with a certain amout of colors.

#### Arguments:
- numberOfColors

##### numberOfColors:
- Requried.
- Must be of type number.
- Value must be between 2 and 5.

#### Returns
ColorThemeData{}
  - A ColorThemeData object containg the generated color theme.

#### Throws error
- If numberOfColors is not present.
- If numberOfColors has invalid type.
- If numberOfColors has invalid value.

#### Example usage

```js
import { Monochrome } from 'color-theme-generator'

try {
  const monochromeTheme = new Monochrome()
  const requestedNumberOfColors = 5  // Argument can be 2 - 5.
  const generatedColorTheme = monochromeTheme.generateColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## SplitComplementary

### generateColorTheme(numberOfColors)

#### Description:
Generates a split complementary color theme with a certain amout of colors.

#### Arguments:
- numberOfColors

##### numberOfColors:
- Requried.
- Must be of type number.
- Value must be between 3 and 5.
- If value is 3 it will generate three colors with equal lightness.
- If value is 4 it will generate three colors with equal lightness and a fourth lighter or darker color.
- If value is 5 it will generate three colors with equal lightness and a fourth lighter color and a fifth darker color.

#### Returns
ColorThemeData{}
  - A ColorThemeData object containg the generated color theme.

#### Throws error
- If numberOfColors is not present.
- If numberOfColors has invalid type.
- If numberOfColors has invalid value.

#### Example usage

```js
import { SplitComplementary } from 'color-theme-generator'

try {
  const splitComplementaryTheme = new SplitComplementary()
  const requestedNumberOfColors = 3  // Argument can be 3 - 5.
  const generatedColorTheme = splitComplementaryTheme.generateColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## Triadic

### generateColorTheme(numberOfColors)

#### Description:
Generates a triadic color theme with a certain amout of colors.

#### Arguments:
- numberOfColors

##### numberOfColors:
- Requried.
- Must be of type number.
- Value must be between 3 and 5.
- If value is 3 it will generate three colors with equal lightness.
- If value is 4 it will generate three colors with equal lightness and a fourth lighter or darker color.
- If value is 5 it will generate three colors with equal lightness and a fourth lighter color and a fifth darker color.

#### Returns
ColorThemeData{}
  - A ColorThemeData object containg the generated color theme.

#### Throws error
- If numberOfColors is not present.
- If numberOfColors has invalid type.
- If numberOfColors has invalid value.

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3  // Argument can be 3 - 5.
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## RandomColorTheme

### generateColorTheme(numberOfColors)

#### Description:
Generates a color theme with a certain amout of colors. The color theme is picked pseudorandom from Analogous, Complementary, Monochrome, SplitComplementary, Triadic.

#### Arguments:
- numberOfColors

##### numberOfColors:
- Optional.
- If present, must be of type number.
- If present, value must be between 2 and 5.
- Defaults to a pseudorandom number between 2 and 5 is picked.

#### Returns
ColorThemeData{}
  - A ColorThemeData object containg the generated color theme.

#### Throws error
- If numberOfColors is present and has invalid type.
- If numberOfColors is present and has invalid value.

#### Example usage

```js
import { RandomColorTheme } from 'color-theme-generator'

try {
  const randomTheme = new RandomColorTheme()
  const requestedNumberOfColors = 5  // Argument can be 2 - 5.
  const generatedColorTheme = randomTheme.generateColorTheme() // Without argument.
  const secondGeneratedColorTheme = randomTheme.generateColorTheme(requestedNumberOfColors) // With argument.
} catch (e) {
  console.log(e.message)
}
```


## Color

### hue

#### Description:
A property containing the hue of the color that the object represents.

#### Type
Number

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0] // Color object.
  const hue = color.hue // For example 180
} catch (e) {
  console.log(e.message)
}
```

### saturation

#### Description:
A property containing the saturation of the color that the object represents.

#### Type
Number

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0] // Color object.
  const saturation = color.saturation // For example 75.
} catch (e) {
  console.log(e.message)
}
```

### lightness

#### Description:
A property containing the lightness of the color that the object represents.

#### Type
Number

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0] // Color object.
  const lightness = color.lightness // For example 50.
} catch (e) {
  console.log(e.message)
}
```

### hsl

#### Description:
A property containing the hsl string of the color that the object represents.

#### Type
String

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0] // Color object.
  const hsl = color.hsl // For example hsl(180, 75%, 50%)
} catch (e) {
  console.log(e.message)
}
```


## ColorThemeData

### colorTheme

#### Description:
A property containing the name of the color theme the object represents.

#### Type
String

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const nameOfColorTheme = generatedColorTheme.colorTheme // 'TRIADIC'
} catch (e) {
  console.log(e.message)
}
```

### numberOfColorsInTheme

#### Description:
A property containing the number of colors in the theme the object represents.

#### Type
Number

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const numberOfColors = generatedColorTheme.numberOfColorsInTheme // 3
} catch (e) {
  console.log(e.message)
}
```

### colorsInTheme

#### Description:
A property containing the colors in the theme the object represents.

#### Type
Color[]
  - A deep copied array of Color objects.

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const colors = generatedColorTheme.colorsInTheme // [Color{}, Color{}, Color{}]
} catch (e) {
  console.log(e.message)
}
```

### sortColorsByHue()

#### Description:
Sorts the color object in colorsInTheme in ascending order based on the their values of hue.

#### Returns
Undefined

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const unsortedColors = generatedColorTheme.colorsInTheme
  generatedColorTheme.sortColorsByHue()
  const sortedColors = generatedColorTheme.colorsInTheme
} catch (e) {
  console.log(e.message)
}
```

### sortColorsBySaturation()

#### Description:
Sorts the color object in colorsInTheme in ascending order based on the their values of saturation.

#### Returns
Undefined

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const unsortedColors = generatedColorTheme.colorsInTheme
  generatedColorTheme.sortColorsBySaturation()
  const sortedColors = generatedColorTheme.colorsInTheme
} catch (e) {
  console.log(e.message)
}
```

### sortColorsByLightness()

#### Description:
Sorts the color object in colorsInTheme in ascending order based on the their values of lightness.

#### Returns
Undefined

#### Example usage

```js
import { Triadic } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 5
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const unsortedColors = generatedColorTheme.colorsInTheme
  generatedColorTheme.sortColorsByLightness()
  const sortedColors = generatedColorTheme.colorsInTheme
} catch (e) {
  console.log(e.message)
}
```


## CSSColorSetter

### setCSSColorPropertyOn(HTMLElement, color)

#### Description:
Sets the CSS property color on the first argument with the color in the second argument  using the style attribute.

#### Arguments:
- HTMLElement
- color

##### HTMLElement:
- Requried.
- Must be of type HTMLElement.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If HTMLElement is not present.
- If color is not present.
- If HTMLElement has invalid type.
- If color has invalid type.

#### Example usage

```js
import { Triadic, CSSColorSetter } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const element = document.createElement('div')

  const CSSSetter = new CSSColorSetter()
  CSSSetter.setCSSColorPropertyOn(element, color)
} catch (e) {
  console.log(e.message)
}
```

### setCSSBackgroundColorPropertyOn(HTMLElement, color)

#### Description:
Sets the CSS property background-color on the first argument with the color in the second argument using the style attribute.

#### Arguments:
- HTMLElement
- color

##### HTMLElement:
- Requried.
- Must be of type HTMLElement.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If HTMLElement is not present.
- If color is not present.
- If HTMLElement has invalid type.
- If color has invalid type.

#### Example usage

```js
import { Triadic, CSSColorSetter } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const element = document.createElement('div')

  const CSSSetter = new CSSColorSetter()
  CSSSetter.setCSSBackgroundColorPropertyOn(element, color)
} catch (e) {
  console.log(e.message)
}
```

### setCSSBorderPropertyOn(HTMLElement, color)

#### Description:
Sets the CSS property border-style and border-color on the first argument with the color in the second argument using the style attribute. border-style is set to solid to make the color appear.

#### Arguments:
- HTMLElement
- color

##### HTMLElement:
- Requried.
- Must be of type HTMLElement.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If HTMLElement is not present.
- If color is not present.
- If HTMLElement has invalid type.
- If color has invalid type.

#### Example usage

```js
import { Triadic, CSSColorSetter } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const element = document.createElement('div')

  const CSSSetter = new CSSColorSetter()
  CSSSetter.setCSSBorderPropertyOn(element, color)
} catch (e) {
  console.log(e.message)
}
```

### setCSSOutlinePropertyOn(HTMLElement, color)

#### Description:
Sets the CSS property outline-style and outline-color on the first argument with the color in the second argument using the style attribute. outline-style is set to solid to make the color appear.

#### Arguments:
- HTMLElement
- color

##### HTMLElement:
- Requried.
- Must be of type HTMLElement.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If HTMLElement is not present.
- If color is not present.
- If HTMLElement has invalid type.
- If color has invalid type.

#### Example usage

```js
import { Triadic, CSSColorSetter } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const element = document.createElement('div')

  const CSSSetter = new CSSColorSetter()
  CSSSetter.setCSSOutlinePropertyOn(element, color)
} catch (e) {
  console.log(e.message)
}
```

### setCSSTextDecorationPropertyOn(HTMLElement, color)

#### Description:
Sets the CSS property text-decoration-line and text-decoration-color on the first argument with the color in the second argument using the style attribute. text-decoration-line is set to underline to make the color appear.

#### Arguments:
- HTMLElement
- color

##### HTMLElement:
- Requried.
- Must be of type HTMLElement.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If HTMLElement is not present.
- If color is not present.
- If HTMLElement has invalid type.
- If color has invalid type.

#### Example usage

```js
import { Triadic, CSSColorSetter } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const element = document.createElement('div')

  const CSSSetter = new CSSColorSetter()
  CSSSetter.setCSSTextDecorationPropertyOn(element, color)
} catch (e) {
  console.log(e.message)
}
```


## HTMLColorSwatch

### turnElementIntoColorSwatch(HTMLElement, color)

#### Description:
Sets the CSS properties on the first argument using the style attribute to make it display the color in the second argument. 

#### Arguments:
- HTMLElement
- color

##### HTMLElement:
- Requried.
- Must be of type HTMLElement.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If HTMLElement is not present.
- If color is not present.
- If HTMLElement has invalid type.
- If color has invalid type.

#### Example usage

```js
import { Triadic, HTMLColorSwatch } from 'color-theme-generator'

try {
  const triadicTheme = new Triadic()
  const requestedNumberOfColors = 3
  const generatedColorTheme = triadicTheme.generateColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const element = document.createElement('div')

  const swatch = new HTMLColorSwatch()
  swatch.turnElementIntoColorSwatch(element, color)
} catch (e) {
  console.log(e.message)
}
```
