/**
 * @file Module for the class CSSColorSetter.
 * @module src/ts/classes/CSSColorSetter
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorSchemes } from "./ColorSchemes.js"
import { Color } from "./Color.js"
import { ColorThemeData } from "./ColorThemeData.js"
import { ColorValues } from "./ColorValues.js"

/**
 * Represents a CSS color setter.
 */
export abstract class CSSColorSetter {
  /**
   * Creates a new CSSColorSetter object.
   *
   * @class
   */
  constructor () {
    // this.#setHue(ColorValues.HueMax, ColorValues.HueMin)
    // this.#setSaturation(ColorValues.SaturationMax, ColorValues.SaturationMin)
    // this.#setMaxLightness(ColorValues.MaxLightness)
    // this.#setMinLightness(ColorValues.MinLightness)
  }

  /**
   * Sets the CSS property color on the recieved HTMLElement with the recieved color.
   If the property is not visible it might be because it does not have an effect on the element.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSColorPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)
    // Set color
    // Notes: none
  }

  /**
   * Sets the CSS property background-color on the recieved HTMLElement with the recieved color.
   If the property is not visible it might be because it does not have an effect on the element.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSBackgroundColorPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)
    // Set background-color
    // Notes: none
  }

  // To long comments for readability.
  /**
   * Sets the CSS property border on the recieved HTMLElement with the recieved color.
   If the recieved HTMLElement does not have border-style set, the method will set it to solid.
   If the property is not visible it might be because it does not have an effect on the element.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSBorderPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)
    // Set border
    // Notes: check if border-style is on HTMLElement, if yes border: color;, else border: solid color;
  }

  /**
   * Sets the CSS property Outline on the recieved HTMLElement with the recieved color.
   If the recieved HTMLElement does not have outline-style set, the method will set it to solid.
   If the property is not visible it might be because it does not have an effect on the element.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSOutlinePropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)
    // Set outline
    // Notes: check if outline-style is on HTMLElement, if yes outline: color;, else outline: solid color;
  }

  /**
   * Sets the CSS property text-decoration on the recieved HTMLElement with the recieved color.
   If the recieved HTMLElement does not have text-decoration-line set, the method will set it to underline.
   If the property is not visible it might be because it does not have an effect on the element.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSTextDecorationPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)
    // Set text-decoration
    // Notes: check if text-decoration-line is on HTMLElement, if yes text-decoration: color;, else text-decoration: underline color;
  }

  /**
   * Validates the argument.
   *
   * @param {HTMLElement} element - The argument to validate.
   * @throws {Error} The argument HTMLElement must be an instance of HTMLElement.
   */
  #validateHTMLElement (element:HTMLElement) {
    if (!(element instanceof HTMLElement)) {
      const error = new Error('The argument HTMLElement must be an instance of HTMLElement.')
      throw error
    }
  }

  /**
   * Validates the argument.
   *
   * @param {HTMLElement} color - The argument to validate.
   * @throws {Error} The argument color must be an instance of Color.
   */
  #validateColor (color:Color) {
    if (!(color instanceof Color)) {
      const error = new Error('The argument color must be an instance of Color.')
      throw error
    }
  }
}
