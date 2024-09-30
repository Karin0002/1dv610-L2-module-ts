import { Color } from './Color.js'
import { CSSColorSetter } from './CSSColorSetter.js'
import { Guard } from './Guard.js'

export class HTMLColorSwatch {
  /**
   * The object to use for setting the color of the color swatch.
   */
  #styler: CSSColorSetter

  #swatchCSSWidth: string

  #swatchCSSHeight: string

  #swatchCSSBorderRadius: string

  /**
   * Creates a new ColorSwatchGenerator object.
   */
  constructor () {
    // Mixed abstraction levels.
    // Low-level: variables.
    // High-level: initiates object of CSSColorSetter.
    this.#styler = new CSSColorSetter()
    this.#swatchCSSWidth = '50px'
    this.#swatchCSSHeight = '50px'
    this.#swatchCSSBorderRadius = '50%'
  }

  /**
   * Generates a div element representing a color swtach.
   *
   * @param color - The color to set the element to.
   * @returns The generated element.
   */
  generateElement (color: Color): HTMLDivElement {
    // Somewhat mixed abstraction levels.
    // Low-level: variables.
    // High-level: calls methods.
    const argumentGuard = new Guard()
    argumentGuard.validateColorArgument(color)

    const swatch = this.#createDivElement()

    this.#styler.setCSSBackgroundColorPropertyOn(swatch, color)
    this.#setCSSWidthOn(swatch)
    this.#setCSSHeightOn(swatch)
    this.#setCSSBorderRadiusOn(swatch)

    return swatch
  }

  #createDivElement (): HTMLDivElement {
    const element = document.createElement('div')

    return element
  }

  #setCSSWidthOn (element: HTMLElement): void {
    element.style.width = this.#swatchCSSWidth
  }

  #setCSSHeightOn (element: HTMLElement): void {
    element.style.height = this.#swatchCSSHeight
  }

  #setCSSBorderRadiusOn (element: HTMLElement): void {
    element.style.borderRadius = this.#swatchCSSBorderRadius
  }
}
