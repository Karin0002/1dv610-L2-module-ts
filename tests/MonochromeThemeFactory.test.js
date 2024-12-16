import { MonochromeThemeFactory } from '../src/classes/MonochromeThemeFactory'
import { ColorThemeData } from '../src/classes/ColorThemeData'
import { ColorThemes } from '../src/enums/ColorThemes'
import { ColorValues } from '../src/enums/ColorValues'
import { describe, expect, test } from 'vitest'

describe('MonochromeThemeFactory.ts', () => {
  test('return type - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(5)
    expect(data).toBeInstanceOf(ColorThemeData)
  })

  test('numbersOfColorsInTheme must match argument - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const numberOfColors = 5
    const data = colorTheme.getColorTheme(numberOfColors)
    expect(data.numberOfColorsInTheme).toEqual(numberOfColors)
  })

  test('colorTheme must match class - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(5)
    expect(data.colorTheme).toEqual(ColorThemes.Monochrome)
  })

  test('invlaid number of arguments - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    expect(() => colorTheme.getColorTheme()).toThrowError()
  })

  test('invlaid value of arguments - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    expect(() => colorTheme.getColorTheme(6)).toThrowError()
    expect(() => colorTheme.getColorTheme(1)).toThrowError()
  })

  test('invlaid type of arguments - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const invalidArgument = 'test'
    expect(() => colorTheme.getColorTheme(invalidArgument)).toThrowError()
  })

  test('value of lightness of lightest color - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(5)
    data.sortColorsByLightness()
    const lightColor = data.colorsInTheme[data.colorsInTheme.length - 1]

    expect(lightColor.lightness).toEqual(ColorValues.MaxLightness)
  })

  test('value of lightness of darkest color - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(5)
    data.sortColorsByLightness()
    const darkColor = data.colorsInTheme[0]

    expect(darkColor.lightness).toEqual(ColorValues.MinLightness)
  })

  test('spreading of colors in lightness - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const numberOfColors = 5
    const data = colorTheme.getColorTheme(numberOfColors)
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

  test('hue of all colors should be the same - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(5)
    const expectedHue = data.colorsInTheme[0].hue

    expect(() => data.colorsInTheme.every(color => color.hue === expectedHue)).toBeTruthy()
  })

  test('variation in saturation - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(5)
    data.sortColorsBySaturation()
    const difference = data.colorsInTheme[data.colorsInTheme.length - 1].saturation - data.colorsInTheme[0].saturation
    expect(difference).toBeLessThanOrEqual(20)
  })

  test('hue must be between HueMax and HueMin - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(3)

    expect(data.colorsInTheme[0].hue).toBeLessThanOrEqual(ColorValues.HueMax)
    expect(data.colorsInTheme[0].hue).toBeGreaterThanOrEqual(ColorValues.HueMin)
  })

  test('saturation must be between SaturationMax + 10 and SaturationMin - 10 - getColorTheme', () => {
    const colorTheme = new MonochromeThemeFactory()
    const data = colorTheme.getColorTheme(3)

    // +10 and -10 is due to satuartion being generated with a deviation.
    expect(data.colorsInTheme[0].saturation).toBeLessThanOrEqual(ColorValues.SaturationMax + 10)
    expect(data.colorsInTheme[0].saturation).toBeGreaterThanOrEqual(ColorValues.SaturationMin - 10)
  })
})
