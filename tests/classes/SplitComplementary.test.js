import { SplitComplementary } from '../../src/classes/SplitComplementary'
import { ColorThemeData } from '../../src/classes/ColorThemeData'
import { ColorThemes } from '../../src/enums/ColorThemes'
import { ColorValues } from '../../src/enums/ColorValues'
import { describe, expect, test } from 'vitest'

describe('SplitComplementary.ts', () => {
  test('return type', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(5)
    expect(data).toBeInstanceOf(ColorThemeData)
  })

  test('difference in saturation', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(5)
    data.sortColorsBySaturation()
    const difference = data.colorsInTheme[data.colorsInTheme.length - 1].saturation - data.colorsInTheme[0].saturation
    expect(difference).toBeLessThanOrEqual(20)
  })

  test('numbersOfColorsInTheme must match argument', () => {
    const colorTheme = new SplitComplementary()
    const numberOfColors = 5
    const data = colorTheme.generateColorTheme(numberOfColors)
    expect(data.numberOfColorsInTheme).toEqual(numberOfColors)
  })

  test('colorTheme must match class', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(5)
    expect(data.colorTheme).toEqual(ColorThemes.SplitComplementary)
  })

  test('invlaid number of arguments', () => {
    const colorTheme = new SplitComplementary()
    expect(() => colorTheme.generateColorTheme()).toThrowError()
  })

  test('invlaid value of arguments', () => {
    const colorTheme = new SplitComplementary()
    expect(() => colorTheme.generateColorTheme(6)).toThrowError()
    expect(() => colorTheme.generateColorTheme(2)).toThrowError()
  })

  test('invlaid type of arguments', () => {
    const colorTheme = new SplitComplementary()
    const invalidArgument = 'test'
    expect(() => colorTheme.generateColorTheme(invalidArgument)).toThrowError()
  })

  test('adding one light or dark color', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(4)
    data.sortColorsByLightness()
    let expectedLightness
    if (data.colorsInTheme[2].lightness < 50) {
      expectedLightness = ColorValues.MaxLightness
    } else {
      expectedLightness = ColorValues.MinLightness
    }

    expect(() => data.colorsInTheme.some(color => color.lightness === expectedLightness)).toBeTruthy()
  })

  test('adding a light and dark color', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(5)
    data.sortColorsByLightness()
    const expectedLightness = ColorValues.MaxLightness
    const expectedDarkness = ColorValues.MinLightness

    expect(() => data.colorsInTheme.some(color => color.lightness === expectedLightness)).toBeTruthy()
    expect(() => data.colorsInTheme.some(color => color.lightness === expectedDarkness)).toBeTruthy()
  })

  test('hue of light or dark color should be included in main colors', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(5)
    data.sortColorsByLightness()
    const lightColor = data.colorsInTheme.filter(color => color.lightness === ColorValues.MaxLightness)
    const darkColor = data.colorsInTheme.filter(color => color.lightness === ColorValues.MinLightness)
    const mainColors = data.colorsInTheme.filter(color => (color.lightness !== ColorValues.MinLightness) || (color.lightness !== ColorValues.MaxLightness))

    expect(() => mainColors.some(color => color.hue === lightColor.hue)).toBeTruthy()
    expect(() => mainColors.some(color => color.hue === darkColor.hue)).toBeTruthy()
  })

  test('hue must be between HueMax and HueMin', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(3)

    expect(data.colorsInTheme[0].hue).toBeLessThanOrEqual(ColorValues.HueMax)
    expect(data.colorsInTheme[0].hue).toBeGreaterThanOrEqual(ColorValues.HueMin)
  })

  test('lightness must be between LightnessMax and LightnessMin', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(3)

    expect(data.colorsInTheme[0].lightness).toBeLessThanOrEqual(ColorValues.LightnessMax)
    expect(data.colorsInTheme[0].lightness).toBeGreaterThanOrEqual(ColorValues.LightnessMin)
  })

  test('saturation must be between SaturationMax + 10 and SaturationMin - 10', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(3)

    // +10 and -10 is due to satuartion being generated with a deviation.
    expect(data.colorsInTheme[0].saturation).toBeLessThanOrEqual(ColorValues.SaturationMax + 10)
    expect(data.colorsInTheme[0].saturation).toBeGreaterThanOrEqual(ColorValues.SaturationMin - 10)
  })

  test('difference in hue', () => {
    const colorTheme = new SplitComplementary()
    const data = colorTheme.generateColorTheme(3)
    data.sortColorsByHue()

    expect(data.colorsInTheme[0].hue).toEqual(data.colorsInTheme[0].hue)
    expect(data.colorsInTheme[1].hue).toBeGreaterThanOrEqual(data.colorsInTheme[0].hue + 150)
    expect(data.colorsInTheme[2].hue).toBeGreaterThanOrEqual(data.colorsInTheme[0].hue + 210)
  })
})
