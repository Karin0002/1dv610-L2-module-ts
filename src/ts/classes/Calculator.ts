/**
 * Module for the class Calculator.
 */

/**
 * Represents a calculator.
 */
export class Calculator {
  /**
   * Generates a random number between the given arguments.
   *
   * @param maxValue - The maximum value the generated number can be.
   * @param minvalue - The minimum value the generated number can be.
   * @returns The newly generated number.
   */
  generateRandomNumber (maxValue: number, minvalue: number): number {
    return Math.round(Math.random() * (maxValue - minvalue) + minvalue)
  }

  /**
   * Varies a number by generating a new random number that is inside the given deviation.
   If number was 40 and deviation was 10, the newly generated number would be between 30 and 50.
   *
   * @param originalNumber - The number that is used a refrence for the new number.
   * @param deviation - The value of the deviation to allow.
   * @returns The newly generated number that is inside the deviation.
   */
  adjustNumber (originalNumber: number, deviation: number): number {
    return this.generateRandomNumber(originalNumber + deviation, originalNumber - deviation)
  }
}
