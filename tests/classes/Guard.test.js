import { Color } from "../../src/classes/Color"
import { Guard } from "../../src/classes/Guard"
import { beforeAll, describe, expect, test } from 'vitest'
import { JSDOM } from 'jsdom'

describe('Guard.ts', () => {
  // Code was 
  let document

  beforeAll(() => {
    const { window } = new JSDOM('...')

    document = window.document
  })

  test('invalid number of properties on argument - validateNumberArgumentWithMaxAndMin', () => {
    const guard = new Guard()
    const argumentWithoutMaxValue = {
      minValue: 10,
      recievedArgument: 15
    }
    const argumentWithoutMinValue = {
      maxValue: 20,
      recievedArgument: 15
    }
    const argumentWithoutRecievedArgument = {
      maxValue: 20,
      minValue: 10,
    }

    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentWithoutMaxValue)).toThrowError()
    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentWithoutMinValue)).toThrowError()
    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentWithoutRecievedArgument)).toThrowError()
  })

  test('invalid types on property on argument - validateNumberArgumentWithMaxAndMin', () => {
    const guard = new Guard()
    const argumentWithInvalidMaxValue = {
      maxValue: 'test',
      minValue: 10,
      recievedArgument: 15
    }
    const argumentWithInvalidMinValue = {
      maxValue: 20,
      minValue: 'test',
      recievedArgument: 15
    }
    const argumentWithInvalidRecievedArgument = {
      maxValue: 20,
      minValue: 10,
      recievedArgument: 'test'
    }

    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentWithInvalidMaxValue)).toThrowError()
    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentWithInvalidMinValue)).toThrowError()
    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentWithInvalidRecievedArgument)).toThrowError()
  })

  test('dont pass the validation - validateNumberArgumentWithMaxAndMin', () => {
    const guard = new Guard()
    const argumentToHigh = {
      maxValue: 20,
      minValue: 10,
      recievedArgument: 21
    }
    const argumentToLow = {
      maxValue: 20,
      minValue: 10,
      recievedArgument: 9
    }

    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentToHigh)).toThrowError()
    expect(() => guard.validateNumberArgumentWithMaxAndMin(argumentToLow)).toThrowError()
  })

  test('pass the validation - validateNumberArgumentWithMaxAndMin', () => {
    const guard = new Guard()
    const validArgument = {
      maxValue: 20,
      minValue: 10,
      recievedArgument: 15
    }

    expect(() => guard.validateNumberArgumentWithMaxAndMin(validArgument)).not.toThrowError()
  })

  test('invalid number of argument - validateNumberArgument', () => {
    const guard = new Guard()

    expect(() => guard.validateNumberArgument()).toThrowError()
  })

  test('invalid type of argument - validateNumberArgument', () => {
    const guard = new Guard()
    const invalidTypeArgument = 'test'

    expect(() => guard.validateNumberArgument(invalidTypeArgument)).toThrowError()
  })

  test('pass the validation - validateNumberArgument', () => {
    const guard = new Guard()
    const validArgument = 5

    expect(() => guard.validateNumberArgument(validArgument)).not.toThrowError()
  })

  test('invalid number of argument - validateColorArgument', () => {
    const guard = new Guard()

    expect(() => guard.validateColorArgument()).toThrowError()
  })

  test('invalid type of argument - validateColorArgument', () => {
    const guard = new Guard()
    const invalidTypeArgument = 'test'

    expect(() => guard.validateColorArgument(invalidTypeArgument)).toThrowError()
  })

  test('pass the validation - validateColorArgument', () => {
    const guard = new Guard()
    const validArgument = new Color(180, 50, 100)

    expect(() => guard.validateColorArgument(validArgument)).not.toThrowError()
  })

  test('invalid number of argument - validateHTMLElementArgument', () => {
    const guard = new Guard()

    expect(() => guard.validateHTMLElementArgument()).toThrowError()
  })

  test('invalid type of argument - validateHTMLElementArgument', () => {
    const guard = new Guard()
    const invalidTypeArgument = 'test'

    expect(() => guard.validateHTMLElementArgument(invalidTypeArgument)).toThrowError()
  })

  test('pass the validation - validateHTMLElementArgument', () => {
    const guard = new Guard()
    const validArgument = document.createElement('div')

    expect(() => guard.validateHTMLElementArgument(validArgument)).not.toThrowError()
  })

  test('validateNumberArgument', () => {
  })
  test('validateColorArgument', () => {
  })
  test('validateHTMLElementArgument', () => {
  })
  test('validateColorThemesArgument', () => {
  })
  test('invalid number of argument in validateColorArrayArgument', () => {
  })
  test('invalid type of argument in validateColorArrayArgument', () => {
  })
  test('the argument doesnt pass validation in validateColorArrayArgument', () => {
  })
  test('the argument passes validation in validateColorArrayArgument', () => {
  })
})
