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
   * Sets CSS properties to make an HTMLElement represent a color swtach.
   *
   * @param HTMLElement - Refrence to the HTML element to turn into a color swatch.
   * @param color - The color to set for the swatch.
   */
  turnElementIntoColorSwatch (HTMLElement: HTMLElement, color: Color): void {
    // Somewhat mixed abstraction levels.
    // Low-level: variables.
    // High-level: calls methods.
    const argumentGuard = new Guard()
    argumentGuard.validateHTMLElementArgument(HTMLElement)
    argumentGuard.validateColorArgument(color)

    this.#styler.setCSSBackgroundColorPropertyOn(HTMLElement, color)
    this.#setCSSWidthOn(HTMLElement)
    this.#setCSSHeightOn(HTMLElement)
    this.#setCSSBorderRadiusOn(HTMLElement)
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
