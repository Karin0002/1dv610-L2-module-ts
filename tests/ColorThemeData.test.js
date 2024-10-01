import { ColorThemeData } from '../src/classes/ColorThemeData'
import { ColorThemes } from '../src/enums/ColorThemes'
import { Color } from '../src/classes/Color'
import { describe, expect, test } from 'vitest'

describe('ColorThemeData.ts', () => {
  test('value of numberOfColorsInTheme', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.numberOfColorsInTheme).toEqual(numberOfColors)
    expect(colorTheme.numberOfColorsInTheme).not.toEqual(numberOfColors + 1)
  })

  test('value of colorTheme', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }

    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.colorTheme).toEqual(themeName)
    expect(colorTheme.colorTheme).not.toEqual(ColorThemes.Complementary)
  })

  test('value of colorsInTheme', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const alternateColors = []
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue + 1, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.colorsInTheme).toEqual(colors)
    expect(colorTheme.colorsInTheme).not.toEqual(alternateColors)
  })

  test('invalid number of params - exclude colorTheme', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    expect(() => new ColorThemeData(undefined, colors)).toThrowError()
    expect(() => new ColorThemeData(colors)).toThrowError()
  })

  test('invalid number of params - exclude colors', () => {
    const themeName = ColorThemes.Analogous
    expect(() => new ColorThemeData(themeName, undefined)).toThrowError()
    expect(() => new ColorThemeData(themeName)).toThrowError()
  })

  test('invalid type of params - colorTheme', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = 'test'
    expect(() => new ColorThemeData(themeName, colors)).toThrowError()
  })

  test('invalid type of params - colors', () => {
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(i)
    }
    const themeName = ColorThemes.Analogous
    expect(() => new ColorThemeData(themeName, colors)).toThrowError()
  })

  test('sort array - sortColorsByHue', () => {
    const valuesOfColor = {
      hue: 150,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const expectedValueOfSortedHues = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      const calculatedHue = valuesOfColor.hue + (i * 50)
      expectedValueOfSortedHues.push(calculatedHue)

      colors.push(new Color(calculatedHue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    // Shuffle the array.
    colors.unshift(colors.pop())

    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)

    const unsortedHues = colorTheme.colorsInTheme.map(color => color.hue)
    colorTheme.sortColorsByHue()
    const sortedHues = colorTheme.colorsInTheme.map(color => color.hue)

    expect(unsortedHues).not.toStrictEqual(sortedHues)
    expect(sortedHues).toStrictEqual(expectedValueOfSortedHues)
  })

  test('sort array - sortColorsBySaturation', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const expectedValueOfSortedSatuartions = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      const calculatedSaturation = valuesOfColor.saturation + (i * 10)
      expectedValueOfSortedSatuartions.push(calculatedSaturation)

      colors.push(new Color(valuesOfColor.hue, calculatedSaturation, valuesOfColor.lightness))
    }
    // Shuffle the array.
    colors.unshift(colors.pop())

    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)

    const unsortedSaturations = colorTheme.colorsInTheme.map(color => color.saturation)
    colorTheme.sortColorsBySaturation()
    const sortedSaturations = colorTheme.colorsInTheme.map(color => color.saturation)

    expect(unsortedSaturations).not.toStrictEqual(sortedSaturations)
    expect(sortedSaturations).toStrictEqual(expectedValueOfSortedSatuartions)
  })

  test('sort array - sortColorsByLightness', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const expectedValueOfSortedLightness = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      const calculatedLightness = valuesOfColor.lightness + (i * 10)
      expectedValueOfSortedLightness.push(calculatedLightness)

      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, calculatedLightness))
    }
    // Shuffle the array.
    colors.unshift(colors.pop())

    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)

    const unsortedLightness = colorTheme.colorsInTheme.map(color => color.lightness)
    colorTheme.sortColorsByLightness()
    const sortedLightness = colorTheme.colorsInTheme.map(color => color.lightness)

    expect(unsortedLightness).not.toStrictEqual(sortedLightness)
    expect(sortedLightness).toStrictEqual(expectedValueOfSortedLightness)
  })

  test('altering colorsInTheme', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)

    const alteredColors = colorTheme.colorsInTheme
    alteredColors.pop()

    expect(colorTheme.colorsInTheme).toEqual(colors)
    expect(colorTheme.colorsInTheme).not.toEqual(alteredColors)
  })

  test('all 3 properties numberOfColorsInTheme, colorsInTheme, colorTheme is present', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }

    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.colorTheme).toBeTruthy()
    expect(colorTheme.numberOfColorsInTheme).toBeTruthy()
    expect(colorTheme.colorsInTheme).toBeTruthy()
  })

  test('numberOfColorsInTheme is a number and matches colorsInTheme.length', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }

    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(typeof colorTheme.numberOfColorsInTheme).toBe('number')
    expect(colorTheme.numberOfColorsInTheme).toBe(colorTheme.colorsInTheme.length)
  })

  test('colorsInTheme is a value of an array of Color objects', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }

    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(() => Array.isArray(colorTheme.colorsInTheme)).toBeTruthy()
    expect(() => colorTheme.colorsInTheme.every(color => color instanceof Color)).toBeTruthy()
  })

  test('colorTheme is a value of the enum ColorThemes', () => {
    const valuesOfColor = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }

    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(valuesOfColor.hue, valuesOfColor.saturation, valuesOfColor.lightness))
    }
    const ColorThemesValues = Object.values(ColorThemes)
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(() => ColorThemesValues.includes(colorTheme.colorTheme)).toBeTruthy()
  })
})
