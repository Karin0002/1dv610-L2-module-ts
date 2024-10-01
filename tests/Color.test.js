import { Color } from '../src/classes/Color'
import { describe, expect, test } from 'vitest'

describe('Color.ts', () => {
  test('setting valid hue', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const color = new Color(hue, saturation, lightness)
    expect(color.hue).toEqual(hue)
    expect(color.hue).not.toEqual(hue + 1)
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

  test('setting valid lightness', () => {
    const hue = 180
    const saturation = 50
    const lightness = 50
    const color = new Color(hue, saturation, lightness)
    expect(color.lightness).toEqual(lightness)
  })

  test('setting too low lightness', () => {
    const hue = 180
    const saturation = 50
    const lightness = -1
    expect(() => new Color(hue, saturation, lightness)).toThrowError()
  })

  test('setting too high lightness', () => {
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
    const alternateHsl = `hsl(${hue - 1}, ${saturation}%, ${lightness}%)`
    const color = new Color(hue, saturation, lightness)
    expect(color.hsl).toBe(hsl)
    expect(color.hsl).not.toBe(alternateHsl)
  })

  test('invalid number of params - exclude hue', () => {
    const saturation = 50
    const lightness = 50
    expect(() => new Color(undefined, saturation, lightness)).toThrowError()
    expect(() => new Color(saturation, lightness)).toThrowError()
  })

  test('invalid number of params - exclude saturation', () => {
    const hue = 180
    const lightness = 50
    expect(() => new Color(hue, undefined, lightness)).toThrowError()
    expect(() => new Color(hue, lightness)).toThrowError()
  })

  test('invalid number of params - exclude lightness', () => {
    const hue = 180
    const saturation = 50
    expect(() => new Color(hue, saturation, undefined)).toThrowError()
    expect(() => new Color(hue, saturation)).toThrowError()
  })

  test('invalid number of params - only hue', () => {
    const hue = 50
    expect(() => new Color(hue, undefined, undefined)).toThrowError()
    expect(() => new Color(hue)).toThrowError()
  })

  test('invalid number of params - only saturation', () => {
    const saturation = 50
    expect(() => new Color(undefined, saturation, undefined)).toThrowError()
    expect(() => new Color(saturation)).toThrowError()
  })

  test('invalid number of params - only lightness', () => {
    const lightness = 50
    expect(() => new Color(undefined, undefined, lightness)).toThrowError()
    expect(() => new Color(lightness)).toThrowError()
  })
})
