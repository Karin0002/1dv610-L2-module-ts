/**
 * Module for the class MultiHueColorTheme.
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
   */
  protected hues: number[]

  /**
   * The lightness of the color theme.
   */
  protected lightness: number

  /**
   * Creates a new MultiHueColorTheme object.
   */
  constructor () {
    super()
    this.hues = []
    this.#setLightness(ColorValues.LightnessMax, ColorValues.LightnessMin)
  }

  /**
   * Sets the lightness.
   *
   * @param maxValue - The maximum value lightness can be set to.
   * @param minValue - The minimum value lightness can be set to.
   */
  #setLightness (maxValue:number, minValue:number) {
    this.lightness = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Picks a random hue from hues.
   *
   * @returns The hue that was picked.
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
   * @returns The generated color.
   */
  protected generateDarkColor (): Color {
    const calculatedSaturation = this.numberCalculator.adjustNumber(this.saturation, 10)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.minLightness)
    return color
  }

  /**
   * Generates a light color for the color theme.
   *
   * @returns The generated color.
   */
  protected generateLightColor (): Color {
    const calculatedSaturation = this.numberCalculator.adjustNumber(this.saturation, 10)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.maxLightness)
    return color
  }
}
