import { Color } from '../../src/classes/Color.ts'
import { describe, expect, test } from '@jest/globals'

describe('color module', () => {
  const testColor = new Color(hue, saturation, lightness)
  const hue = 180
  const saturation = 50
  const lightness = 50
  test('hue on Color', () => {
    expect(
      testColor.hue,
    ).toBe(
      hue,
    )
  })
})
