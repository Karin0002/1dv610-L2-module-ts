import { Monochrome } from '../src/classes/Monochrome'
import { ColorThemeData } from '../src/classes/ColorThemeData'
import { ColorThemes } from '../src/enums/ColorThemes'
import { ColorValues } from '../src/enums/ColorValues'
import { describe, expect, test } from 'vitest'

describe('Monochrome.ts', () => {
  test('return type - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(5)
    expect(data).toBeInstanceOf(ColorThemeData)
  })

  test('numbersOfColorsInTheme must match argument - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const numberOfColors = 5
    const data = colorTheme.generateColorTheme(numberOfColors)
    expect(data.numberOfColorsInTheme).toEqual(numberOfColors)
  })

  test('colorTheme must match class - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(5)
    expect(data.colorTheme).toEqual(ColorThemes.Monochrome)
  })

  test('invlaid number of arguments - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    expect(() => colorTheme.generateColorTheme()).toThrowError()
  })

  test('invlaid value of arguments - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    expect(() => colorTheme.generateColorTheme(6)).toThrowError()
    expect(() => colorTheme.generateColorTheme(1)).toThrowError()
  })

  test('invlaid type of arguments - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const invalidArgument = 'test'
    expect(() => colorTheme.generateColorTheme(invalidArgument)).toThrowError()
  })

  test('value of lightness of lightest color - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(5)
    data.sortColorsByLightness()
    const lightColor = data.colorsInTheme[data.colorsInTheme.length - 1]

    expect(lightColor.lightness).toEqual(ColorValues.MaxLightness)
  })

  test('value of lightness of darkest color - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(5)
    data.sortColorsByLightness()
    const darkColor = data.colorsInTheme[0]

    expect(darkColor.lightness).toEqual(ColorValues.MinLightness)
  })

  test('spreading of colors in lightness - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const numberOfColors = 5
    const data = colorTheme.generateColorTheme(numberOfColors)
    data.sortColorsByLightness()
    const interval = (ColorValues.MaxLightness - ColorValues.MinLightness) / (numberOfColors - 1)

    expect(data.colorsInTheme[0].lightness).toEqual(ColorValues.MinLightness)
    expect(data.colorsInTheme[0].lightness).toEqual(ColorValues.MinLightness + (interval * 0))
    expect(data.colorsInTheme[1].lightness).toEqual(ColorValues.MinLightness + (interval * 1))
    expect(data.colorsInTheme[2].lightness).toEqual(ColorValues.MinLightness + (interval * 2))
    expect(data.colorsInTheme[3].lightness).toEqual(ColorValues.MinLightness + (interval * 3))
    expect(data.colorsInTheme[4].lightness).toEqual(ColorValues.MinLightness + (interval * 4))
    expect(data.colorsInTheme[4].lightness).toEqual(ColorValues.MaxLightness)
  })

  test('hue of all colors should be the same - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(5)
    const expectedHue = data.colorsInTheme[0].hue

    expect(() => data.colorsInTheme.every(color => color.hue === expectedHue)).toBeTruthy()
  })

  test('variation in saturation - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(5)
    data.sortColorsBySaturation()
    const difference = data.colorsInTheme[data.colorsInTheme.length - 1].saturation - data.colorsInTheme[0].saturation
    expect(difference).toBeLessThanOrEqual(20)
  })

  test('hue must be between HueMax and HueMin - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(3)

    expect(data.colorsInTheme[0].hue).toBeLessThanOrEqual(ColorValues.HueMax)
    expect(data.colorsInTheme[0].hue).toBeGreaterThanOrEqual(ColorValues.HueMin)
  })

  test('saturation must be between SaturationMax + 10 and SaturationMin - 10 - generateColorTheme', () => {
    const colorTheme = new Monochrome()
    const data = colorTheme.generateColorTheme(3)

    // +10 and -10 is due to satuartion being generated with a deviation.
    expect(data.colorsInTheme[0].saturation).toBeLessThanOrEqual(ColorValues.SaturationMax + 10)
    expect(data.colorsInTheme[0].saturation).toBeGreaterThanOrEqual(ColorValues.SaturationMin - 10)
  })
})
