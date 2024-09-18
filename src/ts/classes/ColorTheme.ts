/**
 * @file Module for the class ColorTheme.
 * @module src/ts/classes/ColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorSchemes } from "./ColorSchemes.js"
import { Color } from "./Color.js"
import { ColorThemeData } from "./ColorThemeData.js"
import { ColorValues } from "./ColorValues.js"

/**
 * Represents a color theme.
 */
export abstract class ColorTheme {
  /**
   * The hue of the color theme.
   *
   * @type {number}
   */
  protected hue: number

  /**
   * The saturation of the color theme.
   */
  protected saturation: number

  /**
   * The lowest allowed lightness.
   *
   * @type {number}
   */
  protected minLightness: number

  /**
   * The highest allowed lightness.
   *
   * @type {number}
   */
  protected maxLightness: number

  /**
   * Creates a new ColorTheme object.
   *
   * @class
   */
  constructor () {
    this.#setHue(ColorValues.HueMax, ColorValues.HueMin)
    this.#setSaturation(ColorValues.SaturationMax, ColorValues.SaturationMin)
    this.#setMaxLightness(ColorValues.MaxLightness)
    this.#setMinLightness(ColorValues.MinLightness)
  }

  /**
   * Sets the hue.
   *
   * @param {number} [maxValue] - The maximum value hue can be set to.
   * @param {number} [minValue] - The minimum value hue can be set to.
   */
  #setHue (maxValue:number, minValue:number) {
    this.hue = this.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the saturation.
   *
   * @param {number} [maxValue] - The maximum value saturation can be set to.
   * @param {number} [minValue] - The minimum value saturation can be set to.
   */
  #setSaturation (maxValue:number, minValue:number) {
    this.saturation = this.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the minLightness.
   *
   * @param {number} [value] - The value to set minLightness to.
   */
  #setMinLightness (value:number) {
    this.minLightness = value
  }

  /**
   * Sets the maxLightness.
   *
   * @param {number} [value] - The value to set maxLightness to.
   */
  #setMaxLightness (value:number) {
    this.maxLightness = value
  }

  /**
   * Generates a random number between the given arguments.
   *
   * @param {number} max - The maximum value the generated number can be.
   * @param {number} min - The minimum value the generated number can be.
   * @returns {number} The newly generated number.
   */
  protected generateRandomNumber (max:number, min:number): number {
    return Math.round(Math.random() * (max - min) + min)
  }

  /**
   * Varies a number by generating a new random number that is inside the given deviation.
   If number was 40 and the deviation was 10, the newly generated number would be between 30 and 50.
   *
   * @param {number} number - The number that is used a refrence for the new number.
   * @param {number} deviation - The value of the deviation to allow.
   * @returns {number} The newly generated number that is inside the deviation.
   */
  protected adjustNumber (number:number, deviation:number): number {
    return this.generateRandomNumber(number + deviation, number - deviation)
  }

  abstract generateColorTheme (numberOfColors:number): ColorThemeData
}
