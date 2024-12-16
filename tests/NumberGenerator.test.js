import { NumberGenerator } from '../src/classes/NumberGenerator'
import { MaxMinObject } from '../src/classes/MaxMinObject'
import { describe, expect, test } from 'vitest'

describe('Calculator.ts', () => {
  test('return type - generateRandomNumber', () => {
    const calculator = new NumberGenerator()
    const number = calculator.generateRandomNumber(new MaxMinObject(10, 5))

    expect(typeof number).toBe('number')
  })

  test('return value - generateRandomNumber', () => {
    const calculator = new NumberGenerator()
    const number = calculator.generateRandomNumber(new MaxMinObject(10, 5))

    expect(number).toBeLessThanOrEqual(10)
    expect(number).toBeGreaterThanOrEqual(5)
  })

  test('invalid type of argument - generateRandomNumber', () => {
    const calculator = new NumberGenerator()
    const invalidArgument = 'test'

    expect(() => calculator.generateRandomNumber(new MaxMinObject(invalidArgument, invalidArgument))).toThrowError()
    expect(() => calculator.generateRandomNumber(new MaxMinObject(invalidArgument, 5))).toThrowError()
    expect(() => calculator.generateRandomNumber(new MaxMinObject(10, invalidArgument))).toThrowError()
  })

  test('invalid number of argument - generateRandomNumber', () => {
    const calculator = new NumberGenerator()

    expect(() => calculator.generateRandomNumber()).toThrowError()
  })

  test('wrong order of argument - generateRandomNumber', () => {
    const calculator = new NumberGenerator()
    const number = calculator.generateRandomNumber(new MaxMinObject(5, 10))

    expect(number).toBeLessThanOrEqual(10)
    expect(number).toBeGreaterThanOrEqual(5)
  })

  test('return type - adjustNumberWithin10', () => {
    const calculator = new NumberGenerator()
    const number = calculator.adjustNumberWithin10(20)

    expect(typeof number).toBe('number')
  })

  test('return value - adjustNumberWithin10', () => {
    const calculator = new NumberGenerator()
    const argument = 20
    const number = calculator.adjustNumberWithin10(argument)

    expect(number).toBeLessThanOrEqual(argument + 10)
    expect(number).toBeGreaterThanOrEqual(argument - 10)
  })

  test('invalid type of argument - adjustNumberWithin10', () => {
    const calculator = new NumberGenerator()
    const invalidArgument = 'test'

    expect(() => calculator.adjustNumberWithin10(invalidArgument)).toThrowError()
  })

  test('invalid number of argument - adjustNumberWithin10', () => {
    const calculator = new NumberGenerator()

    expect(() => calculator.adjustNumberWithin10()).toThrowError()
  })
})
