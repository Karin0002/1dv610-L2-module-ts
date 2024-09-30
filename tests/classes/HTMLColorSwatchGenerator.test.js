import { CSSColorSetter } from "../../src/classes/CSSColorSetter"
import { beforeAll, describe, expect, test } from 'vitest'
import { JSDOM } from 'jsdom'
import { Color } from "../../src/classes/Color"

describe('CSSColorSetter.ts', () => {
  // Code was 
  let document

  beforeAll(() => {
    const { window } = new JSDOM('...')

    document = window.document
  })

  test('invalid number of arguments - setCSSColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')

    expect(() => CSSSetter.setCSSColorPropertyOn()).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(color)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(undefined, color)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(element)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(element, undefined)).toThrowError()
  })

  test('invalid type of arguments - setCSSColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter
    const color = new Color(180, 100, 50)
    const element = document.createElement('div')
    const invalidArgument = 'test'

    expect(() => CSSSetter.setCSSColorPropertyOn(invalidArgument, invalidArgument)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(invalidArgument, color)).toThrowError()
    expect(() => CSSSetter.setCSSColorPropertyOn(element, invalidArgument)).toThrowError()
  })

  test('CSS color is set and has correct value - setCSSColorPropertyOn', () => {
    const CSSSetter = new CSSColorSetter
    const color = new Color(180, 100, 50)
    const expectedValueOfColorProperty = 'rgb(0, 255, 255)'
    const element = document.createElement('div')
    CSSSetter.setCSSColorPropertyOn(element, color)
    const stylesSet = element.style
    const colorProperty = stylesSet.color

    expect(colorProperty).toBeTruthy()
    expect(colorProperty).toEqual(expectedValueOfColorProperty)
  })