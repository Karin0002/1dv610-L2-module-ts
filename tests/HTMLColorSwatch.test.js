import { HTMLColorSwatch } from '../src/classes/HTMLColorSwatch'
import { beforeAll, describe, expect, test } from 'vitest'
import { JSDOM } from 'jsdom'
import { Color } from '../src/classes/Color'

describe('HTMLColorSwatch.ts', () => {
  let document

  beforeAll(() => {
    const { window } = new JSDOM('...')

    document = window.document
  })

  test('invalid number of arguments - turnElementIntoColorSwatch', () => {
    const swatch = new HTMLColorSwatch()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => swatch.turnElementIntoColorSwatch()).toThrowError()
    expect(() => swatch.turnElementIntoColorSwatch(color)).toThrowError()
    expect(() => swatch.turnElementIntoColorSwatch(undefined, color)).toThrowError()
    expect(() => swatch.turnElementIntoColorSwatch(element)).toThrowError()
    expect(() => swatch.turnElementIntoColorSwatch(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - turnElementIntoColorSwatch', () => {
    const swatch = new HTMLColorSwatch()
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => swatch.turnElementIntoColorSwatch(invalidArgument, invalidArgument)).toThrowError()
    expect(() => swatch.turnElementIntoColorSwatch(invalidArgument, color)).toThrowError()
    expect(() => swatch.turnElementIntoColorSwatch(element, invalidArgument)).toThrowError()
  })

  test('CSS wdith is set and has correct value - turnElementIntoColorSwatch', () => {
    const swatch = new HTMLColorSwatch()
    const color = new Color(180, 100, 50)
    const expectedValueOfWidthProperty = '50px'
    const element = document.createElement('div')
    swatch.turnElementIntoColorSwatch(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.width

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfWidthProperty)
  })

  test('CSS height is set and has correct value - turnElementIntoColorSwatch', () => {
    const swatch = new HTMLColorSwatch()
    const color = new Color(180, 100, 50)
    const expectedValueOfHeightProperty = '50px'
    const element = document.createElement('div')
    swatch.turnElementIntoColorSwatch(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.height

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfHeightProperty)
  })

  test('CSS border-radius is set and has correct value - turnElementIntoColorSwatch', () => {
    const swatch = new HTMLColorSwatch()
    const color = new Color(180, 100, 50)
    const expectedValueOfBorderRadiusProperty = '50%'
    const element = document.createElement('div')
    swatch.turnElementIntoColorSwatch(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.borderRadius

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfBorderRadiusProperty)
  })

  test('CSS background-color is set and has correct value - turnElementIntoColorSwatch', () => {
    const swatch = new HTMLColorSwatch()
    const color = new Color(180, 100, 50)
    const expectedValueOfBackgroundColorProperty = 'rgb(0, 255, 255)'
    const element = document.createElement('div')
    swatch.turnElementIntoColorSwatch(element, color)

    const stylesSet = element.style
    const colorProperty = stylesSet.backgroundColor

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfBackgroundColorProperty)
  })
})
