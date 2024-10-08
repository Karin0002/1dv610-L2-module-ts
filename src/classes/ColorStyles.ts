import { Guard } from './Guard.js'
import { Color } from './Color.js'
import { Style } from './Style.js'

export class ColorStyles {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  #colorDisplayWidth: string

  #colorDisplayHeight: string

  #colorDisplayBorderRadius: string

  constructor () {
    this.#argumentGuard = new Guard()
    this.#setColorDisplayWidth()
    this.#setColorDisplayHeight()
    this.#setColorDisplayBorderRadius()
  }

  #setColorDisplayWidth () {
    this.#colorDisplayWidth = '50px'
  }

  #setColorDisplayHeight () {
    this.#colorDisplayHeight = '50px'
  }

  #setColorDisplayBorderRadius () {
    this.#colorDisplayBorderRadius = '50%'
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

  #validateColor (color: Color) {
    this.#argumentGuard.validateColorArgument(color)
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
   The declaration uses border shorthand to set border-color and border-style.
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
   The declaration uses outline shorthand to set outline-color and outline-style.
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
   The declaration uses text-decoration shorthand to set text-decoration-line and text-decoration-color.
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

  /**
   * Creates a list of declaration that can be used to easily display a color.
   It includes declaration for the properties width, height, border-radius and background-color.
   *
   * @param color - The color to use as the value for the property background-color.
   * @returns An array of objects containing the declarations.
   * @throws Error if the argument does not pass the validation.
   */
  getDeclarationsForColorDisplay (color: Color): Style[] {
    this.#validateColor(color)

    const widthStyle = this.#getWidthDeclaration(this.#colorDisplayWidth)
    const heightStyle = this.#getHeightDeclaration(this.#colorDisplayHeight)
    const borderRadiusStyle = this.#getBorderRadiusDeclaration(this.#colorDisplayBorderRadius)
    const backgroundColorStyle = this.getBackgroundColorDeclaration(color)

    return [widthStyle, heightStyle, borderRadiusStyle, backgroundColorStyle]
  }

  /**
   * Creates a declaration for the CSS property width.
   *
   * @param width - The width to use as the value for the property width.
   * @returns An object containing the declaration.
   */
  #getWidthDeclaration (width: string): Style {
    return new Style('width', width)
  }

  /**
   * Creates a declaration for the CSS property height.
   *
   * @param height - The height to use as the value for the property height.
   * @returns An object containing the declaration.
   */
  #getHeightDeclaration (height: string): Style {
    return new Style('height', height)
  }

  /**
   * Creates a declaration for the CSS property border-radius.
   *
   * @param borderRadius - The radius to use as value for the property border-radius.
   * @returns An object containing the declaration.
   */
  #getBorderRadiusDeclaration (borderRadius: string): Style {
    return new Style('border-radius', borderRadius)
  }
}
