import { Color } from './Color.js'
import { CSSColorSetter } from './CSSColorSetter.js'
import { Guard } from './Guard.js'

export class HTMLColorSwatchGenerator {
  /**
   * The object to use for setting CSS background-color property.
   */
  #styler: CSSColorSetter

  /**
   * The value to set the CSS property width to.
   */
  #swatchCSSWidth: string

  /**
   * The value to set the CSS property height to.
   */
  #swatchCSSHeight: string

  /**
   * The value to set the CSS property border-radius to.
   */
  #swatchCSSBorderRadius: string

  /**
   * Creates a new ColorSwatchGenerator object.
   */
  constructor () {
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
  generateColorSwatchElement (color: Color): HTMLDivElement {
    const argumentGuard = new Guard()
    argumentGuard.validateColorArgument(color)

    const swatch = this.#createDivElement()

    this.#styler.setCSSBackgroundColorPropertyOn(swatch, color)
    this.#setCSSWidth(swatch, this.#swatchCSSWidth)
    this.#setCSSHeight(swatch, this.#swatchCSSHeight)
    this.#setCSSBorderRadius(swatch, this.#swatchCSSBorderRadius)

    return swatch
  }

  /**
   * Creates a HTMLDivElement.
   */
  #createDivElement (): HTMLDivElement {
    const element = document.createElement('div')

    return element
  }

  /**
   * Sets the CSS width property on an element.
   *
   * @param element - Refrence to the HTML element to set the property on.
   * @param CSSValue - The value to set the property to.
   */
  #setCSSWidth (element: HTMLElement, CSSValue: string): void {
    element.style.width = CSSValue
  }

  /**
   * Sets the CSS height property on an element.
   *
   * @param element - Refrence to the HTML element to set the property on.
   * @param CSSValue - The value to set the property to.
   */
  #setCSSHeight (element: HTMLElement, CSSValue: string): void {
    element.style.height = CSSValue
  }

  /**
   * Sets the CSS border-radius property on an element.
   *
   * @param element - Refrence to the HTML element to set the property on.
   * @param CSSValue - The value to set the property to.
   */
  #setCSSBorderRadius (element: HTMLElement, CSSValue: string): void {
    element.style.borderRadius = CSSValue
  }
}
