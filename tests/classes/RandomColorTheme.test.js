import { RandomColorTheme } from '../../src/classes/RandomColorTheme'
import { ColorThemeData } from '../../src/classes/ColorThemeData'
import { ColorThemes } from '../../src/enums/ColorThemes'
import { ColorValues } from '../../src/enums/ColorValues'
import { ArgumentLimits } from '../../src/enums/ArgumentLimits'
import { describe, expect, test } from 'vitest'

describe('Analogous.ts', () => {
  test('return type', () => {
    const colorTheme = new RandomColorTheme()
    const data = colorTheme.generateColorTheme(5)
    expect(data).toBeInstanceOf(ColorThemeData)
  })

  test('return value must be an existing colorTheme', () => {
    const colorTheme = new RandomColorTheme()
    const data = colorTheme.generateColorTheme()
    const acceptedThemes = Object.values(ColorThemes)

    expect(() => acceptedThemes.includes(data.colorTheme)).toBeTruthy()
  })

  test('numbersOfColorsInTheme must match argument', () => {
    const colorTheme = new RandomColorTheme()
    const numberOfColors = 5
    const data = colorTheme.generateColorTheme(numberOfColors)
    expect(data.numberOfColorsInTheme).toEqual(numberOfColors)
  })

  test('numbersOfColorsInTheme must be between RandomColorThemeMax and RandomColorThemeMin', () => {
    const colorTheme = new RandomColorTheme()
    const data = colorTheme.generateColorTheme()
    expect(data.numberOfColorsInTheme).toBeLessThanOrEqual(ArgumentLimits.RandomColorThemeMax)
    expect(data.numberOfColorsInTheme).toBeGreaterThanOrEqual(ArgumentLimits.RandomColorThemeMin)
  })

  test('invlaid value of arguments', () => {
    const colorTheme = new RandomColorTheme()
    expect(() => colorTheme.generateColorTheme(6)).toThrowError()
    expect(() => colorTheme.generateColorTheme(1)).toThrowError()
  })

  test('invlaid type of arguments', () => {
    const colorTheme = new RandomColorTheme()
    const invalidArgument = 'test'
    expect(() => colorTheme.generateColorTheme(invalidArgument)).toThrowError()
  })
})
