/**
 * @file Module for the class Color.
 * @module src/ts/classes/Color
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a color.
 */
abstract class Color {
  /**
   * The hue of the color.
   *
   * @type {number}
   */
  #hue: number

  /**
   * The saturation of the color.
   */
  #saturation: number

  /**
   * The lightness of the color.
   *
   * @type {number}
   */
  #lightness: number

  /**
   * The hsl string that represents the color.
   *
   * @type {string}
   */
  #hsl: string

  /**
   * Creates a new Color object.
   *
   * @param {number} hue - The hue of the color.
   * @param {number} saturation - The saturation of the color.
   * @param {number} lightness - The lightness of the color.
   * @class
   */
  constructor (hue: number, saturation: number, lightness: number) {
    this.#setHue(hue)
    this.#setSaturation(saturation)
    this.#setLightness(lightness)

    this.#setHSL(this.#generateHSLString())
  }

  /**
   * Sets the hue.
   *
   * @param {number} value - The value to set hue to.
   * @throws {Error} The value of hue cannot be greater than 360, nor be less than 0.
   */
  #setHue (value:number) {
    if (value > 360 || value < 0) {
      const error = new Error('The value of hue cannot be greater than 360, nor be less than 0.')
      // error.status = 400
      throw error
    }

    this.#hue = value
  }

  /**
   * Sets the saturation.
   *
   * @param {number} value - The value to set saturation to.
   * @throws {Error} The value of saturation cannot be greater than 100, nor be less than 0.
   */
  #setSaturation (value:number) {
    if (value > 100 || value < 0) {
      const error = new Error('The value of saturation cannot be greater than 100, nor be less than 0.')
      // error.status = 400
      throw error
    }

    this.#saturation = value
  }

  /**
   * Sets the lightness.
   *
   * @param {number} value - The value to set lightness to.
   * @throws {Error} The value of lightness cannot be greater than 100, nor be less than 0.
   */
  #setLightness (value:number) {
    if (value > 100 || value < 0) {
      const error = new Error('The value of lightness cannot be greater than 100, nor be less than 0.')
      // error.status = 400
      throw error
    }

    this.#lightness = value
  }

  /**
   * Sets the hsl.
   *
   * @param {string} value - The value to set hsl to.
   */
  #setHSL (value:string) {
    this.#hsl = value
  }
}
