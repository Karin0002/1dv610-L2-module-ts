/**
 * @file Module for the class ColorSwatchGenerator.
 * @module src/ts/classes/ColorSwatchGenerator
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { Color } from "./Color.js"
import { CSSColorSetter } from "./CSSColorSetter.js"

/**
 * Represents a color swatch generator.
 */
export class ColorSwatchGenerator {
  /**
   * The object to use for setting CSS background-color property.
   *
   * @type {CSSColorSetter}
   */
  #styler: CSSColorSetter

  /**
   * The value to set the CSS property width to.
   *
   * @type {string}
   */
  #swatchCSSWidth: string

  /**
   * The value to set the CSS property height to.
   *
   * @type {string}
   */
  #swatchCSSHeight: string

  /**
   * The value to set the CSS property border-radius to.
   *
   * @type {string}
   */
  #swatchCSSBorderRadius: string

  /**
   * Creates a new ColorSwatchGenerator object.
   *
   * @class
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
   * @param {Color} color - The color to set the element to.
   * @returns {HTMLDivElement} The generated element.
   */
  generateColorSwatchElement (color: Color): HTMLDivElement {
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
  #createDivElement ():HTMLDivElement {
    const element = document.createElement('div')

    return element
  }

  /**
   * Sets the CSS width property on an element.
   *
   * @param {string} element - Refrence to the HTML element to set the property on.
   * @param {string} CSSValue - The value to set the property to.
   */
  #setCSSWidth (element:HTMLElement, CSSValue:string) {
    element.style.width = CSSValue
  }

  /**
   * Sets the CSS height property on an element.
   *
   * @param {string} element - Refrence to the HTML element to set the property on.
   * @param {string} CSSValue - The value to set the property to.
   */
  #setCSSHeight (element:HTMLElement, CSSValue:string) {
    element.style.height = CSSValue
  }

  /**
   * Sets the CSS border-radius property on an element.
   *
   * @param {string} element - Refrence to the HTML element to set the property on.
   * @param {string} CSSValue - The value to set the property to.
   */
  #setCSSBorderRadius (element:HTMLElement, CSSValue:string) {
    element.style.borderRadius = CSSValue
  }
}
