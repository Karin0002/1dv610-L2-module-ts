import { ColorThemeMaker } from './ColorThemeMaker.js'
import { ColorValues } from '../enums/ColorValues.js'
import { Color } from './Color.js'

export abstract class MultiHueColorThemeMaker extends ColorThemeMaker {
  protected hues: number[]
  
  protected lightness: number
  
  protected numberOfMainColors: number

  constructor (numberOfMainColors: number) {
    super()
    this.#setHues()
    this.#setLightness({
      max: ColorValues.LightnessMax,
      min: ColorValues.LightnessMin
    })
    this.#setNumberOfMainColors(numberOfMainColors)
  }

  #setHues () {
    this.hues = []
  }

  /**
   * Sets the hue with a randomly generated number that is between the arguments.
   */
  #setLightness (limits: { max: number, min: number }): void {
    this.lightness = this.generator.generateRandomNumber(limits)
  }

  #setNumberOfMainColors (value: number) {
    this.numberOfMainColors = value
  }

  /**
   * Picks a random hue from the array hues.
   *
   * @returns The hue that was picked.
   */
  protected pickRandomHue (): number {
    const randomIndex = this.generator.generateRandomNumber({
      max: this.hues.length - 1,
      min: 0
    })

    return this.#getHueFromHues(randomIndex)
  }

  #getHueFromHues (index: number): number {
    return this.hues[index]
  }

  /**
   * Generates a dark color for the color theme with a random hue from hues.
   *
   * @returns The generated color.
   */
  protected generateDarkColor (): Color {
    const calculatedSaturation = this.generator.adjustNumberWithin10(this.saturation)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.minLightness)
    return color
  }

  /**
   * Generates a light color for the color theme with a random hue from hues.
   *
   * @returns The generated color.
   */
  protected generateLightColor (): Color {
    const calculatedSaturation = this.generator.adjustNumberWithin10(this.saturation)

    const color = new Color(this.pickRandomHue(), calculatedSaturation, this.maxLightness)
    return color
  }
}
