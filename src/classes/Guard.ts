import { Color } from './Color.js'
import { ColorThemes } from '../enums/ColorThemes.js'

export class Guard {
  // The description of method in comment does not add any new information but the param and throws does.
  /**
   * Validates an argument of type number.
   *
   * @param values - An object containing the properties max, min and recieved.
   * @throws Error if a property is missing on the argument.
   * @throws Error if the argument does not pass the validation.
  */
  validateNumberArgumentWithMaxAndMin (values: { max: number, min: number, recieved: number }): void {
    this.#validatePropertiesIsPresent(values)
    this.#validateMaxAndMinTypes(values)
    this.#validateIsRecievedValid(values)
  }

  #validatePropertiesIsPresent (values: { max: number, min: number, recieved: number }): void {
    if (this.#isAnyPropertyUndefined(values)) {
      this.#throwError(this.#getPropertyUndefinedMessage())
    }
  }

  #isAnyPropertyUndefined (values: { max: number, min: number, recieved: number }): boolean {
    return this.#isUndefined(values.max) || this.#isUndefined(values.min) || this.#isUndefined(values.recieved)
  }

  #isUndefined (recieved: number): boolean {
    return recieved === undefined
  }

  #getPropertyUndefinedMessage (): string {
    return 'Could not validate since at least one property is missing.'
  }

  #validateMaxAndMinTypes (values: { max: number, min: number, recieved: number }): void {
    if (this.#isMaxOrMinNaN({ max: values.max, min: values.min})) {
      this.#throwError(this.#getMaxOrMinNaNMessage())
    }
  }

  #isMaxOrMinNaN (values: { max: number, min: number }): boolean {
    return isNaN(values.max) || isNaN(values.min)
  }

  #getMaxOrMinNaNMessage (): string {
    return 'Could not validate since at least one of maxValue and minValue is not of type number.'
  }

  #validateIsRecievedValid (values: { max: number, min: number, recieved: number }): void {
    if (this.#isRecievedInvalid(values)) {
      this.#throwError(this.#getRecievedInvalidMessage({ max: values.max, min: values.min }))
    }
  }

  #isRecievedInvalid (values: { max: number, min: number, recieved: number }): boolean {
    return isNaN(values.recieved) || values.recieved > values.max || values.recieved < values.min
  }

  #getRecievedInvalidMessage (limits: { max: number, min: number}): string {
    return `The argument cannot be greater than ${limits.max}, nor less than ${limits.min}.`
  }


  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type number.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateNumberArgument (recieved: number): void {
    if (this.#isRecievedNaN(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage('Number'))
    }
  }

  #isRecievedNaN (recieved: number) {
    return isNaN(recieved)
  }

  /**
   * @param type - The name of the wanted type to include in message.
   */
  #getInvalidTypeMessage (type: string): string {
    return `The argument must be of type ${type}.`
  }

  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type Color.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorArgument (recieved: Color): void {
    if (this.#isRecievedNotColor(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage('Color'))
    }
  }

  #isRecievedNotColor (recieved: Color): boolean {
    return !(recieved instanceof Color)
  }

  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type HTMLElement.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateHTMLElementArgument (recieved: HTMLElement): void {
    // Mixed abstraction levels.
    // Low-level: variables, control statements.
    // High-level: calls methods.
    if (this.#isRecievedNotHTML(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage('HTMLElement'))
    }
  }

  #isRecievedNotHTML (recieved: HTMLElement): boolean {
    // nodeType is a property on a Node. The value 1 means it is an element node, i.e. a HTMLElement.
    return recieved.nodeType !== 1
  }

  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type ColorThemes.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorThemesArgument (recieved: ColorThemes): void {
    if (this.#isRecievedNotColorThemes(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage('ColorThemes'))
    }
  }

  #isRecievedNotColorThemes (recieved: ColorThemes): boolean {
    const values = Object.values(ColorThemes)
    return !values.includes(recieved)
  }

  // The description of method and param in comment does not add any new information but the throws does.
  /**
   * Validates an argument of type Color[].
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorArrayArgument (recieved: Color[]): void {
    if (this.#isRecievedNotColorArray(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage('Color[]'))
    }
  }

  #isRecievedNotColorArray (recieved: Color[]): boolean {
    const isNotArray = !Array.isArray(recieved)
    const isEmpty = recieved.length === 0
    const includesInvalidElement = recieved.some((color) => this.#isRecievedNotColor(color))
    return isNotArray || isEmpty || includesInvalidElement
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
