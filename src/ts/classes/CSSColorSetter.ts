import { Color } from './Color.js'
import { Guard } from './Guard.js'

export class CSSColorSetter {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  constructor () {
    this.#argumentGuard = new Guard()
  }

  /**
   * Sets the CSS property color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  setCSSColorPropertyOn (HTMLElement: HTMLElement, color: Color): void {
    // Mixed abstraction levels.
    // Low-level: setting attribute.
    // High-level: calls methods.
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.color = color.hsl
  }

  /**
   * Sets the CSS property background-color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  setCSSBackgroundColorPropertyOn (HTMLElement: HTMLElement, color: Color): void {
    // Mixed abstraction levels.
    // Low-level: setting attribute.
    // High-level: calls methods.
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.backgroundColor = color.hsl
  }

  /**
   * Sets the CSS property border-style to solid and border-color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  setCSSBorderPropertyOn (HTMLElement: HTMLElement, color: Color): void {
    // Mixed abstraction levels.
    // Low-level: variables, setting attribute.
    // High-level: calls methods.
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    const borderStyle = 'solid'
    HTMLElement.style.border = `${borderStyle} ${color.hsl}`
  }

  /**
   * Sets the CSS property outline-style to solid and outline-color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  setCSSOutlinePropertyOn (HTMLElement: HTMLElement, color: Color): void {
    // Mixed abstraction levels.
    // Low-level: variables, setting attribute.
    // High-level: calls methods.
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    const outlineStyle = 'solid'
    HTMLElement.style.outline = `${outlineStyle} ${color.hsl}`
  }

  /**
   * Sets the CSS property text-decoration-line to underline and text-decoration-color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  setCSSTextDecorationPropertyOn (HTMLElement: HTMLElement, color: Color): void {
    // Mixed abstraction levels.
    // Low-level: variables, setting attribute.
    // High-level: calls methods.
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    const textDecorationLine = 'underline'
    HTMLElement.style.textDecoration = `${textDecorationLine} ${color.hsl}`
  }
}
