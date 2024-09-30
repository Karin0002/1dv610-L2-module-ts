import { Calculator } from '../../src/classes/Calculator'
import { ColorThemeData } from '../../src/classes/ColorThemeData'
import { ColorThemes } from '../../src/enums/ColorThemes'
import { ColorValues } from '../../src/enums/ColorValues'
import { describe, expect, test } from 'vitest'

describe('Calculator.ts', () => {
  test('return type of generateRandomNumber', () => {
    const calculator = new Calculator()
    const number = calculator.generateRandomNumber(10, 5)

    expect(typeof number).toBe('number')
  })

  test('return value of generateRandomNumber', () => {
    const calculator = new Calculator()
    const number = calculator.generateRandomNumber(10, 5)

    expect(number).toBeLessThanOrEqual(10)
    expect(number).toBeGreaterThanOrEqual(5)
  })

  test('invalid type of argument to generateRandomNumber', () => {
    const calculator = new Calculator()
    const invalidArgument = 'test'

    expect(() => calculator.generateRandomNumber(invalidArgument, invalidArgument)).toThrowError()
    expect(() => calculator.generateRandomNumber(invalidArgument, 5)).toThrowError()
    expect(() => calculator.generateRandomNumber(10, invalidArgument)).toThrowError()
  })

  test('invalid type of argument to generateRandomNumber', () => {
    const calculator = new Calculator()
    const invalidArgument = 'test'

    expect(() => calculator.generateRandomNumber(invalidArgument, invalidArgument)).toThrowError()
    expect(() => calculator.generateRandomNumber(invalidArgument, 5)).toThrowError()
    expect(() => calculator.generateRandomNumber(10, invalidArgument)).toThrowError()
  })

  test('invalid number of argument to generateRandomNumber', () => {
    const calculator = new Calculator()

    expect(() => calculator.generateRandomNumber(10)).toThrowError()
    expect(() => calculator.generateRandomNumber(10, undefined)).toThrowError()
    expect(() => calculator.generateRandomNumber(5)).toThrowError()
    expect(() => calculator.generateRandomNumber(undefined, 5)).toThrowError()
  })

  test('wrong order of argument to generateRandomNumber', () => {
    const calculator = new Calculator()
    const number = calculator.generateRandomNumber(5, 10)

    expect(number).toBeLessThanOrEqual(10)
    expect(number).toBeGreaterThanOrEqual(5)
  })

  test('return type of adjustNumberWithin10', () => {
    const calculator = new Calculator()
    const number = calculator.adjustNumberWithin10(20)

    expect(typeof number).toBe('number')
  })

  test('return value of adjustNumberWithin10', () => {
    const calculator = new Calculator()
    const argument = 20
    const number = calculator.adjustNumberWithin10(argument)

    expect(number).toBeLessThanOrEqual(argument + 10)
    expect(number).toBeGreaterThanOrEqual(argument - 10)
  })

  test('invalid type of argument to adjustNumberWithin10', () => {
    const calculator = new Calculator()
    const invalidArgument = 'test'

    expect(() => calculator.generateRandomNumber(invalidArgument, invalidArgument)).toThrowError()
    expect(() => calculator.generateRandomNumber(invalidArgument, 5)).toThrowError()
    expect(() => calculator.generateRandomNumber(10, invalidArgument)).toThrowError()
  })

  test('invalid type of argument to adjustNumberWithin10', () => {
    const calculator = new Calculator()
    const invalidArgument = 'test'

    expect(() => calculator.generateRandomNumber(invalidArgument, invalidArgument)).toThrowError()
    expect(() => calculator.generateRandomNumber(invalidArgument, 5)).toThrowError()
    expect(() => calculator.generateRandomNumber(10, invalidArgument)).toThrowError()
  })

  test('invalid number of argument to adjustNumberWithin10', () => {
    const calculator = new Calculator()

    expect(() => calculator.generateRandomNumber(10)).toThrowError()
    expect(() => calculator.generateRandomNumber(10, undefined)).toThrowError()
    expect(() => calculator.generateRandomNumber(5)).toThrowError()
    expect(() => calculator.generateRandomNumber(undefined, 5)).toThrowError()
  })

  test('wrong order of argument to adjustNumberWithin10', () => {
    const calculator = new Calculator()
    const number = calculator.generateRandomNumber(5, 10)

    expect(number).toBeLessThanOrEqual(10)
    expect(number).toBeGreaterThanOrEqual(5)
  })
})
