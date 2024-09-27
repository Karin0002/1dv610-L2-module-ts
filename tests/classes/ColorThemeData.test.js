import { ColorThemeData } from '../../src/classes/ColorThemeData'
import { ColorThemes } from '../../src/enums/ColorThemes'
import { Color } from '../../src/classes/Color'
import { describe, expect, test } from 'vitest'

describe('ColorThemeData.ts', () => {
  test('checking numberOfColorsInTheme - valid', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(hue, saturation, lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.numberOfColorsInTheme).toEqual(numberOfColors)
  })

  test('checking numberOfColorsInTheme - invalid', () => {
    const colorValues = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue, colorValues.saturation, colorValues.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.numberOfColorsInTheme).not.toEqual(numberOfColors + 1)
  })

  test('checking colorTheme - valid', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(hue, saturation, lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.colorTheme).toEqual(themeName)
  })

  test('checking colorTheme - invalid', () => {
    const colorValues = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue, colorValues.saturation, colorValues.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.numberOfColorsInTheme).not.toEqual(ColorThemes.Complementary)
  })

  test('checking colorsInTheme - valid', () => {
    const colorValues = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue, colorValues.saturation, colorValues.lightness))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.colorsInTheme).toEqual(colors)
  })

  test('checking colorsInTheme - invalid', () => {
    const colorValues = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue, colorValues.saturation, colorValues.lightness))
    }
    const differentColors = []
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue + i, colorValues.saturation + i, colorValues.lightness + i))
    }
    const themeName = ColorThemes.Analogous
    const colorTheme = new ColorThemeData(themeName, colors)
    expect(colorTheme.colorsInTheme).not.toEqual(differentColors)
  })

  test('invalid number of params - exclude colorTheme', () => {
    const colorValues = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue, colorValues.saturation, colorValues.lightness))
    }
    expect(() => new ColorThemeData(colors)).toThrowError()
  })

  test('invalid number of params - exclude colors', () => {
    const themeName = ColorThemes.Analogous
    expect(() => new ColorThemeData(themeName)).toThrowError()
  })

  test('invalid type of params - colorTheme', () => {
    const colorValues = {
      hue: 180,
      saturation: 50,
      lightness: 50,
    }
    const colors = []
    const numberOfColors = 3
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(new Color(colorValues.hue, colorValues.saturation, colorValues.lightness))
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

  test('sort array of colors of hue - valid', () => {

  })

  test('sort array of colors of hue - valid', () => {

  })

  test('sort array of colors of hue - valid', () => {

  })

  test('sort array of colors of hue - invalid', () => {

  })

  test('sort array of colors of hue - invalid', () => {

  })

  test('sort array of colors of hue - invalid', () => {

  })
})
