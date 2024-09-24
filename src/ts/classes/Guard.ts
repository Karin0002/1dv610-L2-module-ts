/**
 * Module for the class Guard.
 */

import { Color } from "./Color.js"

/**
 * Represents a guard.
 */
export class Guard {
  /**
   * Validates a number argument. If argument does not pass validation an error is thrown.
   *
   * @param values - An object containing the properties maxValue, minValue and recievedArgument.
   * @throws Error if the arguments does not pass the validation.
   */
  validateNumberArgument (values:{ maxValue:number, minValue:number, recievedArgument:number }) {
    if (isNaN(values.recievedArgument) || values.recievedArgument > values.maxValue || values.recievedArgument < values.minValue) {
      const message = `The argument cannot be greater than ${values.maxValue}, nor less than ${values.minValue}.`
      this.#throwError(message)
    }
  }

  /**
   * Validates a Color argument. If argument does not pass validation an error is thrown.
   *
   * @param recievedArgument - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
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
   * @param recievedArgument - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateHTMLElementArgument (recievedArgument:HTMLElement) {
    if (!(recievedArgument instanceof HTMLElement)) {
      const message = `The argument must be an instance of HTMLElement.`
      this.#throwError(message)
    }
  }

  /**
   * Creates and throws an error.
   *
   * @param errorMessage - The error message to use.
   * @throws Error.
   */
  #throwError (errorMessage:string) {
    const error = new Error(errorMessage)

    throw error
  }
}
