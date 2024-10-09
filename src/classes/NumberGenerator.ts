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
   * @param limits - An object containing the properties max and min.
   * @returns The newly generated number.
   */
  generateRandomNumber (limits: { max: number, min: number }): number {
    this.#argumentGuard.validateNumberArgument(limits.max)
    this.#argumentGuard.validateNumberArgument(limits.min)

    return this.#generateNumber(limits)
  }

  #generateNumber (limits: { max: number, min: number }): number {
    return Math.round(Math.random() * (limits.max - limits.min) + limits.min)
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
      max: this.#addDeviationToRefrence(refrenceNumber),
      min: this.#subtractDeviationFromRefrence(refrenceNumber)
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
