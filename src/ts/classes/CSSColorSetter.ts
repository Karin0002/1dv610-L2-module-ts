/**
 * Module for the class CSSColorSetter.
 */

import { Color } from "./Color.js"
import { Guard } from "./Guard.js"

/**
 * Represents a CSS color setter.
 */
export class CSSColorSetter {
  /**
   * The guard to validate arguments.
   */
  #argumentGuard: Guard

  /**
   * Creates a new CSSColorSetter object.
   */
  constructor () {
    this.#argumentGuard = new Guard()
    // If it was to write to file instead of using style attribute the constructor could take the path to css file as argument.
  }

  /**
   * Sets the CSS property color on the recieved HTMLElement with the recieved color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  setCSSColorPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.backgroundColor = color.hsl
    // Set color
    // Notes: none
  }

  /**
   * Sets the CSS property background-color on the recieved HTMLElement with the recieved color using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  setCSSBackgroundColorPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.color = color.hsl
    // Set background-color
    // Notes: none
  }

  /**
   * Sets the CSS property border-color on the recieved HTMLElement with the recieved color and border-style to solid using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  setCSSBorderPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.border = `solid ${color.hsl}`
    // Set border
    // Notes: check if border-style is on HTMLElement, if yes border: color;, else border: solid color;
  }

  /**
   * Sets the CSS property outline-color on the recieved HTMLElement with the recieved color and outline-style to solid using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  setCSSOutlinePropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.outline = `solid ${color.hsl}`
    // Set outline
    // Notes: check if outline-style is on HTMLElement, if yes outline: color;, else outline: solid color;
  }

  /**
   * Sets the CSS property text-decoration-color on the recieved HTMLElement with the recieved color and text-decoration-line to underline using style attribute.
   *
   * @param HTMLElement - Refrence to the HTML element to set the property on.
   * @param color - The color to set the property to.
   * @throws Error if the arguments does not pass the validation.
   */
  setCSSTextDecorationPropertyOn (HTMLElement:HTMLElement, color:Color) {
    this.#argumentGuard.validateHTMLElementArgument(HTMLElement)
    this.#argumentGuard.validateColorArgument(color)

    HTMLElement.style.textDecoration = `underline ${color.hsl}`
    // Set text-decoration
    // Notes: check if text-decoration-line is on HTMLElement, if yes text-decoration: color;, else text-decoration: underline color;
  }
}
