import { CSSColorSetter } from '../src/classes/CSSColorSetter'
import { beforeAll, describe, expect, test } from 'vitest'
import { JSDOM } from 'jsdom'
import { Color } from '../src/classes/Color'

describe('CSSColorSetter.ts', () => {
  let document

  beforeAll(() => {
    const { window } = new JSDOM('...')

    document = window.document
  })

  test('invalid number of arguments - setCSSColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => CSSSetter.setCSSColorPropertyOn()).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(color)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(undefined, color)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(element)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - setCSSColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => CSSSetter.setCSSColorPropertyOn(invalidArgument, invalidArgument)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(invalidArgument, color)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(element, invalidArgument)).toThrowError()
  })

  test('CSS color is set and has correct value - setCSSColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const expectedValueOfColorProperty = 'rgb(0, 255, 255)'
    const element = document.createElement('div')
    CSSSetter.setCSSColorPropertyOn(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.color

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfColorProperty)
  })

  test('invalid number of arguments - setCSSBackgroundColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn()).toThrowError()
    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(color)).toThrowError()
    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(undefined, color)).toThrowError()
    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(element)).toThrowError()
    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - setCSSBackgroundColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(invalidArgument, invalidArgument)).toThrowError()
    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(invalidArgument, color)).toThrowError()
    expect(() => CSSSetter.setCSSBackgroundColorPropertyOn(element, invalidArgument)).toThrowError()
  })

  test('CSS background-color is set and has correct value - setCSSBackgroundColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const expectedValueOfColorProperty = 'rgb(0, 255, 255)'
    const element = document.createElement('div')
    CSSSetter.setCSSBackgroundColorPropertyOn(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.backgroundColor

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfColorProperty)
  })

  test('invalid number of arguments - setCSSBorderPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => CSSSetter.setCSSBorderPropertyOn()).toThrowError()
    expect(() => CSSSetter.setCSSBorderPropertyOn(color)).toThrowError()
    expect(() => CSSSetter.setCSSBorderPropertyOn(undefined, color)).toThrowError()
    expect(() => CSSSetter.setCSSBorderPropertyOn(element)).toThrowError()
    expect(() => CSSSetter.setCSSBorderPropertyOn(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - setCSSBorderPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => CSSSetter.setCSSBorderPropertyOn(invalidArgument, invalidArgument)).toThrowError()
    expect(() => CSSSetter.setCSSBorderPropertyOn(invalidArgument, color)).toThrowError()
    expect(() => CSSSetter.setCSSBorderPropertyOn(element, invalidArgument)).toThrowError()
  })

  test('CSS border-color is set and has correct value - setCSSBorderPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const expectedValueOfBorderProperty = `solid ${color.hsl}`
    const element = document.createElement('div')
    CSSSetter.setCSSBorderPropertyOn(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.border

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfBorderProperty)
  })

  test('invalid number of arguments - setCSSOutlinePropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => CSSSetter.setCSSOutlinePropertyOn()).toThrowError()
    expect(() => CSSSetter.setCSSOutlinePropertyOn(color)).toThrowError()
    expect(() => CSSSetter.setCSSOutlinePropertyOn(undefined, color)).toThrowError()
    expect(() => CSSSetter.setCSSOutlinePropertyOn(element)).toThrowError()
    expect(() => CSSSetter.setCSSOutlinePropertyOn(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - setCSSOutlinePropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => CSSSetter.setCSSOutlinePropertyOn(invalidArgument, invalidArgument)).toThrowError()
    expect(() => CSSSetter.setCSSOutlinePropertyOn(invalidArgument, color)).toThrowError()
    expect(() => CSSSetter.setCSSOutlinePropertyOn(element, invalidArgument)).toThrowError()
  })

  test('CSS outline-color is set and has correct value - setCSSOutlinePropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const expectedValueOfOutlineProperty = `solid ${color.hsl}`
    const element = document.createElement('div')
    CSSSetter.setCSSOutlinePropertyOn(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.outline

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfOutlineProperty)
  })

  test('invalid number of arguments - setCSSTextDecorationPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => CSSSetter.setCSSTextDecorationPropertyOn()).toThrowError()
    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(color)).toThrowError()
    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(undefined, color)).toThrowError()
    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(element)).toThrowError()
    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - setCSSTextDecorationPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(invalidArgument, invalidArgument)).toThrowError()
    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(invalidArgument, color)).toThrowError()
    expect(() => CSSSetter.setCSSTextDecorationPropertyOn(element, invalidArgument)).toThrowError()
  })

  test('CSS text-decoration is set and has correct value - setCSSTextDecorationPropertyOn', () => {
    const CSSSetter = new CSSColorSetter()
    const color = new Color(180, 100, 50)
    const expectedValueOfTextDecorationProperty = `underline ${color.hsl}`
    const element = document.createElement('div')
    CSSSetter.setCSSTextDecorationPropertyOn(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.textDecoration

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfTextDecorationProperty)
  })
})
