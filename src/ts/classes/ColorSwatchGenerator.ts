/**
 * @file Module for the class ColorSwatchGenerator.
 * @module src/ts/classes/ColorSwatchGenerator
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { Color } from "./Color.js"
import { CSSColorSetter } from "./CSSColorSetter.js"

/**
 * Represents a color swatch generator setter.
 */
export class ColorSwatchGenerator {
  /**
   * The object to use for setting CSS background-color property.
   *
   * @type {CSSColorSetter}
   */
  #styler: CSSColorSetter

  /**
   * Creates a new ColorSwatchGenerator object.
   *
   * @class
   */
  constructor () {
    this.#styler = new CSSColorSetter()
  }

  /**
   * Generates an element representing a color swtach.
   *
   * @param {Color} color - The color to set the element to.
   * @returns {HTMLDivElement} The generated element.
   */
  generateColorSwatchElement (color: Color): HTMLDivElement {
    const swatch = document.createElement('div')
    this.#styler.setCSSBackgroundColorPropertyOn(swatch, color)
    swatch.style.width = '50px'
    swatch.style.height = '50px'
    swatch.style.borderRadius = '50%'

    return swatch
  }
}
