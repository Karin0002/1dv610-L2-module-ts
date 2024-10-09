import { Guard } from './Guard.js'

export class NumberGenerator {
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
  generateRandomNumber (limits: { maxValue: number, minValue: number }): number {
    this.#argumentGuard.validateNumberArgument(limits.maxValue)
    this.#argumentGuard.validateNumberArgument(limits.minValue)

    return this.#generateNumber(limits)
  }

  #generateNumber (limits: { maxValue: number, minValue: number }): number {
    return Math.round(Math.random() * (limits.maxValue - limits.minValue) + limits.minValue)
  }

  /**
   * Varies a number by generating a new random number that is within +- 10 from the argument.
   If number was 40, the newly generated number would be between 30 and 50.
   *
   * @param refrenceNumber - The number that is used a refrence for the new number.
   * @returns The newly generated number that is inside the deviation.
   */
  adjustNumberWithin10 (refrenceNumber: number): number {
    this.#argumentGuard.validateNumberArgument(refrenceNumber)

    return this.#generateNumber({
      maxValue: this.#addDeviationToRefrence(refrenceNumber),
      minValue: this.#subtractDeviationFromRefrence(refrenceNumber)
    })
  }

  #addDeviationToRefrence (refrence: number): number {
    const deviation = 10
    return refrence + deviation
  }

  #subtractDeviationFromRefrence (refrence: number): number {
    const deviation = 10
    return refrence - deviation
  }
}
