import { Color } from './Color.js'
import { Style } from './Style.js'
import { Validator } from './Validator.js'

export class ColorStyles {
  #validator: Validator

  constructor () {
    this.#validator = new Validator()
  }

  /**
   * Creates a declaration for the CSS property color.
   *
   * @param color - The color to use as value for the property color.
   * @returns An object containing the declaration.
   * @throws Error if the argument does not pass the validation.
   */
  getColorDeclaration (color: Color): Style {
    this.#validateColor(color)

    return new Style('color', color.hsl)
  }

  #validateColor (color: Color): void {
    this.#validator.validateColorArgument(color)
  }

  /**
   * Creates a declaration for the CSS property background-color.
   *
   * @param color - The color to use as value for the property background-color.
   * @returns An object containing the declaration.
   * @throws Error if the argument does not pass the validation.
   */
  getBackgroundColorDeclaration (color: Color): Style {
    this.#validateColor(color)

    return new Style('background-color', color.hsl)
  }

  /**
   * Creates a declaration for the CSS property border.
   * The declaration uses border shorthand to set border-color and border-style.
   *
   * @param color - The color to use as value for the property border-color.
   * @param borderStyle - The value of the property border-style.
   * @returns An object containing the declaration.
   * @throws Error if the argument does not pass the validation.
   */
  getBorderDeclaration (color: Color, borderStyle: string): Style {
    this.#validateColor(color)

    return new Style('border', `${borderStyle} ${color.hsl}`)
  }

  /**
   * Creates a declaration for the CSS property outline.
   * The declaration uses outline shorthand to set outline-color and outline-style.
   *
   * @param color - The color to use as value for the property outline-color.
   * @param outlineStyle - The value of the property outline-style.
   * @returns An object containing the declaration.
   * @throws Error if the argument does not pass the validation.
   */
  getOutlineDeclaration (color: Color, outlineStyle: string): Style {
    this.#validateColor(color)

    return new Style('outline', `${outlineStyle} ${color.hsl}`)
  }

  /**
   * Creates a declaration for the CSS property text-decoration.
   * The declaration uses text-decoration shorthand to set text-decoration-line and text-decoration-color.
   *
   * @param color - The color to use as the value for the property text-decoration-color.
   * @param textDecorationLine - The value of the property text-decoration-line.
   * @returns An object containing the declaration.
   * @throws Error if the argument does not pass the validation.
   */
  getTextDecorationDeclaration (color: Color, textDecorationLine: string): Style {
    this.#validateColor(color)

    return new Style('text-decoration', `${textDecorationLine} ${color.hsl}`)
  }
}
