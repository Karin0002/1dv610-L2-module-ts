/**
 * @file Module for the class Calculator.
 * @module src/ts/classes/Calculator
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a calculator.
 */
export class Calculator {
  /**
   * Generates a random number between the given arguments.
   *
   * @param {number} max - The maximum value the generated number can be.
   * @param {number} min - The minimum value the generated number can be.
   * @returns {number} The newly generated number.
   */
  generateRandomNumber (max:number, min:number): number {
    return Math.round(Math.random() * (max - min) + min)
  }

  /**
   * Varies a number by generating a new random number that is inside the given deviation.
   If number was 40 and deviation was 10, the newly generated number would be between 30 and 50.
   *
   * @param {number} number - The number that is used a refrence for the new number.
   * @param {number} deviation - The value of the deviation to allow.
   * @returns {number} The newly generated number that is inside the deviation.
   */
  adjustNumber (number:number, deviation:number): number {
    return this.generateRandomNumber(number + deviation, number - deviation)
  }
}
