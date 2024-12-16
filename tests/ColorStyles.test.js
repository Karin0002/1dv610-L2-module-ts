import { ColorStyles } from '../src/classes/ColorStyles'
import { beforeAll, describe, expect, test } from 'vitest'
import { JSDOM } from 'jsdom'
import { Color } from '../src/classes/Color'
import { Style } from '../src/classes/Style'

describe('ColorStyles.ts', () => {
  let document

  beforeAll(() => {
    const { window } = new JSDOM('...')

    document = window.document
  })

  test('invalid number of arguments - getColorDeclaration', () => {
    const styler = new ColorStyles()

    expect(() => styler.getColorDeclaration()).toThrowError()
  })

  test('invalid type of arguments - getColorDeclaration', () => {
    const styler = new ColorStyles()
    const invalidInput = 'test'

    expect(() => styler.getColorDeclaration(invalidInput)).toThrowError()
  })

  test('returns a style object with correct values - getColorDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const actual = styler.getColorDeclaration(color)

    expect(actual).toBeInstanceOf(Style)
    expect(actual.property).toBe('color')
    expect(actual.value).toBe(color.hsl)
  })

  test('invalid number of arguments - getBackgroundColorDeclaration', () => {
    const styler = new ColorStyles()

    expect(() => styler.getBackgroundColorDeclaration()).toThrowError()
  })

  test('invalid type of arguments - getBackgroundColorDeclaration', () => {
    const styler = new ColorStyles()
    const invalidInput = 'test'

    expect(() => styler.getBackgroundColorDeclaration(invalidInput)).toThrowError()
  })

  test('returns a style object with correct values - getBackgroundColorDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const actual = styler.getBackgroundColorDeclaration(color)

    expect(actual).toBeInstanceOf(Style)
    expect(actual.property).toBe('background-color')
    expect(actual.value).toBe(color.hsl)
  })

  test('invalid number of arguments - getBorderDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const style = 'dotted'

    expect(() => styler.getBorderDeclaration()).toThrowError()
    expect(() => styler.getBorderDeclaration(undefined, style)).toThrowError()
  })

  test('invalid type of arguments - getBorderDeclaration', () => {
    const styler = new ColorStyles()
    const invalidInput = 'test'
    const style = 'dotted'

    expect(() => styler.getBorderDeclaration(invalidInput, style)).toThrowError()
  })

  test('returns a style object with correct values - getBorderDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const style = 'dotted'
    const actual = styler.getBorderDeclaration(color, style)

    expect(actual).toBeInstanceOf(Style)
    expect(actual.property).toBe('border')
    expect(actual.value).toBe(`${style} ${color.hsl}`)
  })

  test('invalid number of arguments - getOutlineDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const style = 'dotted'

    expect(() => styler.getOutlineDeclaration()).toThrowError()
    expect(() => styler.getOutlineDeclaration(undefined, style)).toThrowError()
  })

  test('invalid type of arguments - getOutlineDeclaration', () => {
    const styler = new ColorStyles()
    const invalidInput = 'test'
    const style = 'dotted'

    expect(() => styler.getOutlineDeclaration(invalidInput, style)).toThrowError()
  })

  test('returns a style object with correct values - getOutlineDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const style = 'dotted'
    const actual = styler.getOutlineDeclaration(color, style)

    expect(actual).toBeInstanceOf(Style)
    expect(actual.property).toBe('outline')
    expect(actual.value).toBe(`${style} ${color.hsl}`)
  })

  test('invalid number of arguments - getTextDecorationDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const style = 'solid'

    expect(() => styler.getTextDecorationDeclaration()).toThrowError()
    expect(() => styler.getTextDecorationDeclaration(undefined, style)).toThrowError()
  })

  test('invalid type of arguments - getTextDecorationDeclaration', () => {
    const styler = new ColorStyles()
    const invalidInput = 'test'
    const style = 'solid'

    expect(() => styler.getTextDecorationDeclaration(invalidInput, style)).toThrowError()
  })

  test('returns a style object with correct values - getTextDecorationDeclaration', () => {
    const styler = new ColorStyles()
    const color = new Color(180, 100, 50)
    const style = 'solid'
    const actual = styler.getTextDecorationDeclaration(color, style)

    expect(actual).toBeInstanceOf(Style)
    expect(actual.property).toBe('text-decoration')
    expect(actual.value).toBe(`${style} ${color.hsl}`)
  })
})
