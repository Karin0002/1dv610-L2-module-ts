/**
 * @file Module for the class MultiHueColorTheme.
 * @module src/ts/classes/MultiHueColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorTheme } from "./ColorTheme.js"
import { ColorValues } from "../enums/ColorValues.js"
import { Color } from "./Color.js"

/**
 * Represents a multi hue color theme.
 */
export abstract class MultiHueColorTheme extends ColorTheme {
  /**
   * The hues of the color theme.
   *
   * @type {number[]}
   */
  protected hues: number[]

  /**
   * The lightness of the color theme.
   *
   * @type {number}
   */
  protected lightness: number

  /**
   * Creates a new MultiHueColorTheme object.
   *
   * @class
   */
  constructor () {
    super()
    this.hues = []
    this.#setLightness(ColorValues.LightnessMax, ColorValues.LightnessMin)
  }

  /**
   * Sets the lightness.
   *
   * @param {number} maxValue - The maximum value lightness can be set to.
   * @param {number} minValue - The minimum value lightness can be set to.
   */
  #setLightness (maxValue:number, minValue:number) {
    this.lightness = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Picks a random hue from hues.
   *
   * @returns {number} The hue that was picked.
   */
  protected pickRandomHue (): number {
    // Random index between 0, the first index, and hues.length - 1, the last index.
    const randomIndex = this.numberCalculator.generateRandomNumber(this.hues.length - 1, 0)
    // const randomIndex = this.generateRandomNumber(this.hues.length - 1, 0)
    return this.hues[randomIndex]
    // const randomIndex = this.generateRandomNumber(hues.length - 1, 0)
    // return hues[randomIndex]

  }

  /**
   * Generates a dark color for the color theme.
   *
   * @returns {Color} The generated color.
   */
  protected generateDarkColor (): Color {
    const calculatedSaturation = this.numberCalculator.adjustNumber(this.saturation, 10)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.minLightness)
    return color
  }

  /**
   * Generates a light color for the color theme.
   *
   * @returns {Color} The generated color.
   */
  protected generateLightColor (): Color {
    const calculatedSaturation = this.numberCalculator.adjustNumber(this.saturation, 10)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.maxLightness)
    return color
  }
}
