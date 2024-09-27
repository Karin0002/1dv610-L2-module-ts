import { ColorThemeData } from '../../src/classes/ColorThemeData'
import { ColorThemes } from '../../src/enums/ColorThemes'
import { Color } from '../../src/classes/Color'
import { describe, expect, test } from 'vitest'

describe('ColorThemeData.ts', () => {
  test('setting valid hue', () => {
    const number
    const hue = 180
    const saturation = 50
    const lightness = 50
    const color = new Color(hue, saturation, lightness)
    expect(color.hue).toEqual(hue)
  })

  test('getting the hsl', () => {
    const hue = 180
    const saturation = 50
    const lightness = 100
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    const color = new Color(hue, saturation, lightness)
    expect(color.hsl).toBe(hsl)
  })

  test('getting the hsl and comparing it to wrong hsl', () => {
    const hue = 180
    const saturation = 50
    const lightness = 100
    const hsl = `hsl(${hue + 1}, ${saturation}%, ${lightness}%)`
    const color = new Color(hue, saturation, lightness)
    expect(color.hsl).not.toBe(hsl)
  })
})
