# Objects, methods and properties

## Table of content
1. [AnalogousThemeFactory](#analogousthemefactory)
    1. [getColorTheme()](#getcolorthemenumberofcolors) 
2. [ComplementaryThemeFactory](#complementarythemefactory)
    1. [getColorTheme()](#getcolorthemenumberofcolors-1) 
3. [MonochromeThemeFactory](#monochromethemefactory)
    1. [getColorTheme()](#getcolorthemenumberofcolors-2) 
4. [SplitComplementaryThemeFactory](#splitcomplementarythemefactory)
    1. [getColorTheme()](#getcolorthemenumberofcolors-3) 
5. [TriadicThemeFactory](#triadicthemefactory)
    1. [getColorTheme()](#getcolorthemenumberofcolors-4) 
6. [Color](#color)
    1. [hue](#hue)
    2. [saturation](#saturation)
    3. [lightness](#lightness)
    4. [hsl](#hsl)
7. [ColorThemeData](#colorthemedata)
    1. [colorTheme](#colortheme)
    2. [numberOfColorsInTheme](#numberofcolorsintheme)
    3. [colorsInTheme](#colorsintheme)
    4. [sortColorsByHue()](#sortcolorsbyhue)
    5. [sortColorsBySaturation()](#sortcolorsbysaturation)
    6. [sortColorsByLightness()](#sortcolorsbylightness)
8. [ColorStyles](#colorstyles)
    1. [getColorDeclaration()](#getcolordeclarationcolor)
    2. [getBackgroundColorDeclaration()](#getbackgroundcolordeclarationcolor)
    3. [getBorderDeclaration()](#getborderdeclarationcolor-borderstyle)
    4. [getOutlineDeclaration()](#getoutlinedeclarationcolor-outlinestyle)
    5. [getTextDecorationDeclaration()](#gettextdecorationdeclarationcolor-textdecorationline)
9. [Style](#style)
    1. [property](#property)
    2. [value](#value)
    3. [declaration](#declaration)



## AnalogousThemeFactory

### getColorTheme(numberOfColors)

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
import { AnalogousThemeFactory } from 'color-theme-generator'

try {
  const factory = new AnalogousThemeFactory()
  const requestedNumberOfColors = 3  // Argument can be 3 - 5.
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## ComplementaryThemeFactory

### getColorTheme(numberOfColors)

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
import { ComplementaryThemeFactory } from 'color-theme-generator'

try {
  const factory = new ComplementaryThemeFactory()
  const requestedNumberOfColors = 2  // Argument can be 2 - 4.
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## MonochromeThemeFactory

### getColorTheme(numberOfColors)

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
import { MonochromeThemeFactory } from 'color-theme-generator'

try {
  const factory = new MonochromeThemeFactory()
  const requestedNumberOfColors = 5  // Argument can be 2 - 5.
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## SplitComplementaryThemeFactory

### getColorTheme(numberOfColors)

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
import { SplitComplementaryThemeFactory } from 'color-theme-generator'

try {
  const factory = new SplitComplementaryThemeFactory()
  const requestedNumberOfColors = 3  // Argument can be 3 - 5.
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)
} catch (e) {
  console.log(e.message)
}
```


## TriadicThemeFactory

### getColorTheme(numberOfColors)

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3  // Argument can be 3 - 5.
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)
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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors) // ColorThemeData object.

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors) // ColorThemeData object.

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors) // ColorThemeData object.

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors) // ColorThemeData object.

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors) // ColorThemeData object.

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
import { TriadicThemeFactory } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors) // ColorThemeData object.

  const unsortedColors = generatedColorTheme.colorsInTheme
  generatedColorTheme.sortColorsByLightness()
  const sortedColors = generatedColorTheme.colorsInTheme
} catch (e) {
  console.log(e.message)
}
```


## ColorStyles

### getColorDeclaration(color)

#### Description:
Gets a declaration of the CSS property color with the color in the argument.

#### Arguments:
- color

##### color:
- Requried.
- Must be of type Color.

#### Returns
Style{}
  - A Style object containg the CSS declaration.

#### Throws error
- If color is not present.
- If color has invalid type.

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]

  const styler = new ColorStyles()
  const style = styler.getColorDeclaration(color)
} catch (e) {
  console.log(e.message)
}
```

### getBackgroundColorDeclaration(color)

#### Description:
Gets a declaration of the CSS property background-color with the color in the argument.

#### Arguments:
- color

##### color:
- Requried.
- Must be of type Color.

#### Returns
Style{}
  - A Style object containg the CSS declaration.

#### Throws error
- If color is not present.
- If color has invalid type.

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]

  const styler = new ColorStyles()
  const style = styler.getBackgroundColorDeclaration(color)
} catch (e) {
  console.log(e.message)
}
```

### getBorderDeclaration(color, borderStyle)

#### Description:
Gets a declaration of the CSS property border with the arguments color and borderStyle.

#### Arguments:
- color
- borderStyle

##### borderStyle:
- Must be a valid value of the CSS property border-style.
- If no border is visible you are likely to have excluded or sent an invalid value.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Style{}
  - A Style object containg the CSS declaration.

#### Throws error
- If color is not present.
- If color has invalid type.

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const borderStyle = 'dotted'

  const styler = new ColorStyles()
  const style = styler.getBorderDeclaration(color, borderStyle)
} catch (e) {
  console.log(e.message)
}
```

### getOutlineDeclaration(color, outlineStyle)

#### Description:
Gets a declaration of the CSS property outline with the arguments color and outlineStyle.

#### Arguments:
- color
- outlineStyle

##### outlineStyle:
- Must be a valid value of the CSS property outline-style.
- If no outline is visible you are likely to have excluded or sent an invalid value.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Style{}
  - A Style object containg the CSS declaration.

#### Throws error
- If color is not present.
- If color has invalid type.

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const outlineStyle = 'groove'

  const styler = new ColorStyles()
  const style = styler.getOutlineDeclaration(color, outlineStyle)
} catch (e) {
  console.log(e.message)
}
```

### getTextDecorationDeclaration(color, textDecorationLine)

#### Description:
Gets a declaration of the CSS property text-decoration with the arguments color and text-decoration-line.

#### Arguments:
- color
- textDecorationLine

##### textDecorationLine:
- Must be a valid value of the CSS property text-decoration-line.
- If no text-decoration is visible you are likely to have excluded or sent an invalid value.

##### color:
- Requried.
- Must be of type Color.

#### Returns
Undefined

#### Throws error
- If color is not present.
- If color has invalid type.

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const textDecorationLine = 'underline'

  const styler = new ColorStyles()
  const style = styler.getTextDecorationDeclaration(color, textDecorationLine)
} catch (e) {
  console.log(e.message)
}
```


## Style

### property

#### Description:
A property containing the CSS property that the object represents.

#### Type
String

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]
  const textDecorationLine = 'underline'

  const styler = new ColorStyles()
  const style = styler.getTextDecorationDeclaration(color, textDecorationLine)

  const property = style.property // "text-decoration"
} catch (e) {
  console.log(e.message)
}
```

### value

#### Description:
A property containing the value of the CSS property that the object represents.

#### Type
String

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]

  const styler = new ColorStyles()
  const style = styler.getColorDeclaration(color)

  const value = style.value // For example hsl(180, 75%, 50%)
} catch (e) {
  console.log(e.message)
}
```

### declaration

#### Description:
A property containing the full CSS declaration that the object represents.

#### Type
String

#### Example usage

```js
import { TriadicThemeFactory, ColorStyles } from 'color-theme-generator'

try {
  const factory = new TriadicThemeFactory()
  const requestedNumberOfColors = 3
  const generatedColorTheme = factory.getColorTheme(requestedNumberOfColors)

  const color = generatedColorTheme.colorsInTheme[0]

  const styler = new ColorStyles()
  const style = styler.getColorDeclaration(color)

  const value = style.declaration // For example "color: hsl(180, 75%, 50%)"
} catch (e) {
  console.log(e.message)
}
```
