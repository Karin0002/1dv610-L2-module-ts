import { ColorThemeData } from '../../src/classes/ColorThemeData'
import { ColorThemes } from '../../src/enums/ColorThemes'
import { Color } from '../../src/classes/Color'
import { describe, expect, test } from 'vitest'

describe('ColorThemeData.ts', () => {
  test('checking numberOfColorsInTheme', () => {
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
  })

  test('checking colorTheme', () => {
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
  })

  test('checking colorsInTheme', () => {
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
    expect(colorTheme.colorsInTheme).toEqual(colors)
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
    expect(() => new ColorThemeData(colors)).toThrowError()
  })

  test('invalid number of params - exclude colors', () => {
    const themeName = ColorThemes.Analogous
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

  test('sort array of colors by hue', () => {
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

  test('sort array of colors by saturation', () => {
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

  test('sort array of colors by lightness', () => {
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
})
