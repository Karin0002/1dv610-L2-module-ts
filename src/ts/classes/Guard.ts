/**
 * @file Module for the class Guard.
 * @module src/ts/classes/Guard
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a guard.
 */
export class Guard {
  /**
   * Validates an argument. If argument does not pass validation an error is thrown.
   *
   * @param {object} values - An object containing the properties maxValue, minValue and recievedArgument. 
   */
  validateArgument (values:{ maxValue:number, minValue:number, recievedArgument:number }) {
    if (values.recievedArgument > values.maxValue || values.recievedArgument < values.minValue) {
      const limits = {
        maxValue: values.maxValue,
        minValue: values.minValue
      }
      this.#throwError(limits)
    }
  }

  #throwError (argumentLimits:{ maxValue:number, minValue:number }) {
    const error = new Error(`The argument cannot be greater than ${argumentLimits.maxValue}, nor less than ${argumentLimits.minValue}.`)

    throw error
  }
}
