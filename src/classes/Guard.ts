import { Color } from './Color.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { ValidationObject } from './ValidationObject.js'
import { MaxMinObject } from './MaxMinObject.js'
import { ExpectedTypes } from '../enums/ExpectedTypes.js'

export class Guard {
  /**
   * Validates an argument of type number with a max and min value.
   *
   * @param values - A ValidationObject containing the values to validate.
   * @throws Error if a property is missing on the argument.
   * @throws Error if the argument does not pass the validation.
  */
  validateNumberArgumentWithMaxAndMin (values: ValidationObject): void {
    this.#validatePropertiesIsPresent(values)
    this.#validateMaxAndMinTypes(values)
    this.#validateIsRecievedValid(values)
  }

  #validatePropertiesIsPresent (values: ValidationObject): void {
    if (this.#isAnyPropertyUndefined(values)) {
      this.#throwError(this.#getPropertyUndefinedMessage())
    }
  }

  #isAnyPropertyUndefined (values: ValidationObject): boolean {
    return this.#isUndefined(values.max) || this.#isUndefined(values.min) || this.#isUndefined(values.recieved)
  }

  #isUndefined (recieved: number): boolean {
    return recieved === undefined
  }

  #getPropertyUndefinedMessage (): string {
    return 'Could not validate since at least one property is missing.'
  }

  #validateMaxAndMinTypes (values: ValidationObject): void {
    if (this.#isMaxOrMinNaN(new MaxMinObject(values.max, values.min))) {
      this.#throwError(this.#getMaxOrMinNaNMessage())
    }
  }

  #isMaxOrMinNaN (values: MaxMinObject): boolean {
    return isNaN(values.max) || isNaN(values.min)
  }

  #getMaxOrMinNaNMessage (): string {
    return 'Could not validate since at least one of maxValue and minValue is not of type number.'
  }

  #validateIsRecievedValid (values: ValidationObject): void {
    if (this.#isRecievedInvalid(values)) {
      this.#throwError(this.#getRecievedInvalidMessage(new MaxMinObject(values.max, values.min)))
    }
  }

  #isRecievedInvalid (values: ValidationObject): boolean {
    return isNaN(values.recieved) || values.recieved > values.max || values.recieved < values.min
  }

  #getRecievedInvalidMessage (limits: MaxMinObject): string {
    return `The argument cannot be greater than ${limits.max}, nor less than ${limits.min}.`
  }

  /**
   * Validates an argument of type number.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateNumberArgument (recieved: number): void {
    if (this.#isRecievedNaN(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage(ExpectedTypes.NUMBER))
    }
  }

  #isRecievedNaN (recieved: number): boolean {
    return isNaN(recieved)
  }

  /**
   * @param expectedType - The name of the expected type to include in message.
   */
  #getInvalidTypeMessage (expectedType: ExpectedTypes): string {
    return `The argument must be of type ${expectedType}.`
  }

  /**
   * Validates an argument of type Color.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorArgument (recieved: Color): void {
    if (this.#isRecievedNotColor(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage(ExpectedTypes.COLOR))
    }
  }

  #isRecievedNotColor (recieved: Color): boolean {
    return !(recieved instanceof Color)
  }

  /**
   * Validates an argument of type HTMLElement.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateHTMLElementArgument (recieved: HTMLElement): void {
    if (this.#isRecievedNotHTML(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage(ExpectedTypes.HTMLELEMENT))
    }
  }

  #isRecievedNotHTML (recieved: HTMLElement): boolean {
    // nodeType is a property on a Node. The value 1 means it is an element node, i.e. a HTMLElement.
    return recieved.nodeType !== 1
  }

  /**
   * Validates an argument of type ColorThemes.
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorThemesArgument (recieved: ColorThemes): void {
    if (this.#isRecievedNotColorThemes(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage(ExpectedTypes.COLORTHEMES))
    }
  }

  #isRecievedNotColorThemes (recieved: ColorThemes): boolean {
    const values = Object.values(ColorThemes)
    return !values.includes(recieved)
  }

  /**
   * Validates an argument of type Color[].
   *
   * @param recieved - The argument to validate.
   * @throws Error if the arguments does not pass the validation.
   */
  validateColorArrayArgument (recieved: Color[]): void {
    if (this.#isRecievedNotColorArray(recieved)) {
      this.#throwError(this.#getInvalidTypeMessage(ExpectedTypes.COLORARRAY))
    }
  }

  #isRecievedNotColorArray (recieved: Color[]): boolean {
    const isNotArray = !Array.isArray(recieved)
    const isEmpty = recieved.length === 0
    const includesInvalidElement = recieved.some(color => this.#isRecievedNotColor(color))
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
