/**
 * @file Module for the class CSSColorSetter.
 * @module src/ts/classes/CSSColorSetter
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { Color } from "./Color.js"

/**
 * Represents a CSS color setter.
 */
export class CSSColorSetter {
  /**
   * Creates a new CSSColorSetter object.
   *
   * @class
   */
  constructor () {
    // If it was to write to file instead of using style attribute the constructor could take the path to css file as argument.
  }

  /**
   * Sets the CSS property color on the recieved HTMLElement with the recieved color using style attribute.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSColorPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)

    HTMLElement.style.backgroundColor = color.hsl
    // Set color
    // Notes: none
  }

  /**
   * Sets the CSS property background-color on the recieved HTMLElement with the recieved color using style attribute.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSBackgroundColorPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)

    HTMLElement.style.color = color.hsl
    // Set background-color
    // Notes: none
  }

  /**
   * Sets the CSS property border-color on the recieved HTMLElement with the recieved color and border-style to solid using style attribute.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSBorderPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)

    HTMLElement.style.border = `solid ${color.hsl}`
    // Set border
    // Notes: check if border-style is on HTMLElement, if yes border: color;, else border: solid color;
  }

  /**
   * Sets the CSS property outline-color on the recieved HTMLElement with the recieved color and outline-style to solid using style attribute.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSOutlinePropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)

    HTMLElement.style.outline = `solid ${color.hsl}`
    // Set outline
    // Notes: check if outline-style is on HTMLElement, if yes outline: color;, else outline: solid color;
  }

  /**
   * Sets the CSS property text-decoration-color on the recieved HTMLElement with the recieved color and text-decoration-line to underline using style attribute.
   *
   * @param {HTMLElement} HTMLElement - Refrence to the HTML element to set the property on.
   * @param {Color} color - The color to set the property to.
   */
  setCSSTextDecorationPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#validateHTMLElement(HTMLElement)
    this.#validateColor(color)

    HTMLElement.style.textDecoration = `underline ${color.hsl}`
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
