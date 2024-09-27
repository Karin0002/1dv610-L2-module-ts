import { Color } from '../../src/classes/Color'
import { describe, expect, test } from 'vitest'

describe('Color.ts', () => {
  test('setting valid hue', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const color = new Color(hue, saturation, lightness)
    expect(color.hue).toEqual(hue)
  })

  test('setting too low hue', () => {
    const hue = -1
    const saturation = 50
    const lightness = 50
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting too high hue', () => {
    const hue = 361
    const saturation = 50
    const lightness = 50
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting invalid type of hue', () => {
    const hue = 'test'
    const saturation = 50
    const lightness = 50
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting valid saturation', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const color = new Color(hue, saturation, lightness)
    expect(color.saturation).toEqual(saturation)
  })

  test('setting too low saturation', () => {
    const hue = 180
    const saturation = -1
    const lightness = 50
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting too high saturation', () => {
    const hue = 180
    const saturation = 101
    const lightness = 50
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting invalid type of saturation', () => {
    const hue = 180
    const saturation = 'test'
    const lightness = 50
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting and returning valid lightness', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const color = new Color(hue, saturation, lightness)
    expect(color.lightness).toEqual(lightness)
  })

  test('setting and returning too low lightness', () => {
    const hue = 180
    const saturation = 50
    const lightness = -1
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting and returning too high lightness', () => {
    const hue = 180
    const saturation = 50
    const lightness = 101
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting invalid type of lightness', () => {
    const hue = 180
    const saturation = 50
    const lightness = 'test'
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
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
