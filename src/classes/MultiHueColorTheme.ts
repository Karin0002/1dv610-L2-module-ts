import { ColorTheme } from './ColorTheme.js'
import { ColorValues } from '../enums/ColorValues.js'
import { Color } from './Color.js'

export abstract class MultiHueColorTheme extends ColorTheme {
  protected hues: number[]

  protected lightness: number

  constructor () {
    super()
    this.hues = []
    this.#setLightness(ColorValues.LightnessMax, ColorValues.LightnessMin)
  }

  /**
   * Sets the hue with a randomly generated number that is between the arguments.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  #setLightness (maxValue: number, minValue: number): void {
    this.lightness = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Picks a random hue from the array hues.
   *
   * @returns The hue that was picked.
   */
  protected pickRandomHue (): number {
    // Mixed abstraction levels.
    // Low-level: variable.
    // High-level: calls methods.
    const randomIndex = this.numberCalculator.generateRandomNumber(this.hues.length - 1, 0)

    return this.hues[randomIndex]
  }

  /**
   * Generates a dark color for the color theme with a random hue from hues.
   *
   * @returns The generated color.
   */
  protected generateDarkColor (): Color {
    const calculatedSaturation = this.numberCalculator.adjustNumberWithin10(this.saturation)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.minLightness)
    return color
  }

  /**
   * Generates a light color for the color theme with a random hue from hues.
   *
   * @returns The generated color.
   */
  protected generateLightColor (): Color {
    const calculatedSaturation = this.numberCalculator.adjustNumberWithin10(this.saturation)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.maxLightness)
    return color
  }
}
