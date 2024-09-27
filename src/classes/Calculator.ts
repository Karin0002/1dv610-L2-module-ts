import { Guard } from './Guard.js'

export class Calculator {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  constructor () {
    this.#argumentGuard = new Guard()
  }

  /**
   * Generates a random number between the given arguments.
   *
   * @param maxValue - The maximum value the generated number can be.
   * @param minValue - The minimum value the generated number can be.
   * @returns The newly generated number.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  generateRandomNumber (maxValue: number, minValue: number): number {
    // Mixed abstraction levels.
    // Low-level: Math.round, Math.random, calculations.
    // High-level: calls methods.
    this.#argumentGuard.validateNumberArgument(maxValue)
    this.#argumentGuard.validateNumberArgument(minValue)

    return Math.round(Math.random() * (maxValue - minValue) + minValue)
  }

  /**
   * Varies a number by generating a new random number that is within +- 10 from the argument.
   If number was 40, the newly generated number would be between 30 and 50.
   *
   * @param originalNumber - The number that is used a refrence for the new number.
   * @returns The newly generated number that is inside the deviation.
   */
  // Instead of taking deviation as an argument I made the decision to exclude it
  // to only have one argument, the cons is that the method is less versatile.
  adjustNumberWithin10 (originalNumber: number): number {
    // Mixed abstraction levels.
    // Low-level: variables, calculations.
    // High-Level: call methods.
    this.#argumentGuard.validateNumberArgument(originalNumber)

    const deviation = 10
    return this.generateRandomNumber(originalNumber + deviation, originalNumber - deviation)
  }
}
