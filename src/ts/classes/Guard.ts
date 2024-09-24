/**
 * @file Module for the class Guard.
 * @module src/ts/classes/Guard
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { Color } from "./Color.js"

/**
 * Represents a guard.
 */
export class Guard {
  /**
   * Validates a number argument. If argument does not pass validation an error is thrown.
   *
   * @param {object} values - An object containing the properties maxValue, minValue and recievedArgument. 
   */
  validateNumberArgument (values:{ maxValue:number, minValue:number, recievedArgument:number }) {
    if (isNaN(values.recievedArgument) || values.recievedArgument > values.maxValue || values.recievedArgument < values.minValue) {
      const message = `The argument cannot be greater than ${values.maxValue}, nor less than ${values.minValue}.`
      this.#throwError(message)
    }
  }

  /**
   * Creates and throws an error.
   *
   * @param {string} errorMessage - The error message to use.
   */
  #throwError (errorMessage:string) {
    const error = new Error(errorMessage)

    throw error
  }

  /**
   * Validates a Color argument. If argument does not pass validation an error is thrown.
   *
   * @param {object} recievedArgument - The argument to validate.
   */
  validateColorArgument (recievedArgument:Color) {
    if (!(recievedArgument instanceof Color)) {
      const message = `The argument must be an instance of Color.`
      this.#throwError(message)
    }
  }

  /**
   * Validates a HTMLElement argument. If argument does not pass validation an error is thrown.
   *
   * @param {object} recievedArgument - The argument to validate.
   */
  validateHTMLElementArgument (recievedArgument:HTMLElement) {
    if (!(recievedArgument instanceof HTMLElement)) {
      const message = `The argument must be an instance of HTMLElement.`
      this.#throwError(message)
    }
  }
}
