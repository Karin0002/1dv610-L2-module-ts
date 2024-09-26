import { Color } from './Color.js'

export class Guard {
  // The description of method in comment does not add any new information but the param and throws does.
  /**
   * Validates an argument of type number.
   *
  // Implicit instruction but that is explicit in the code through validation.
   * @param values - An object containing the properties maxValue, minValue and recievedArgument.
   * @throws Error if a property is missing on the argument.
   * @throws Error if the argument does not pass the validation.
   */
  validateNumberArgument (values: { maxValue: number, minValue: number, recievedArgument: number }): void {
    // Mixed abstraction levels.
    // Low-level: variables, control statements.
    // High-level: calls methods.
    if (values.maxValue === undefined || values.minValue === undefined || values.recievedArgument === undefined) {
      const message = 'Could not validate since at least one of maxValue, minValue and recievedArgument is missing.'
      this.#throwError(message)
    }
    if (isNaN(values.recievedArgument) || values.recievedArgument > values.maxValue || values.recievedArgument < values.minValue) {
      const message = `The argument cannot be greater than ${values.maxValue}, nor less than ${values.minValue}.`
      this.#throwError(message)
    }
  }

  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type Color.
   *
   * @param recievedArgument - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorArgument (recievedArgument: Color): void {
    // Mixed abstraction levels.
    // Low-level: variables, control statements.
    // High-level: calls methods.
    if (!(recievedArgument instanceof Color)) {
      const message = `The argument must be an instance of Color.`
      this.#throwError(message)
    }
  }

  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type HTMLElement.
   *
   * @param recievedArgument - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateHTMLElementArgument (recievedArgument: HTMLElement): void {
    // Mixed abstraction levels.
    // Low-level: variables, control statements.
    // High-level: calls methods.
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
  #throwError (errorMessage: string): void {
    const error = new Error(errorMessage)

    throw error
  }
}
