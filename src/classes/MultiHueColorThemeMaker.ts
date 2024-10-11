import { ColorThemeMaker } from './ColorThemeMaker.js'
import { ColorValues } from '../enums/ColorValues.js'
import { Color } from './Color.js'
import { MaxMinObject } from './MaxMinObject.js'

export abstract class MultiHueColorThemeMaker extends ColorThemeMaker {
  protected hues: number[]

  protected lightness: number

  protected numberOfMainColors: number

  constructor (numberOfMainColors: number) {
    super()
    this.#setHues()
    this.#setLightness(new MaxMinObject(ColorValues.LightnessMax, ColorValues.LightnessMin))
    this.#setNumberOfMainColors(numberOfMainColors)
  }

  #setHues (): void {
    this.hues = []
  }

  /**
   * Sets the hue with a randomly generated number that is between the arguments.
   */
  #setLightness (limits: MaxMinObject): void {
    this.lightness = this.generator.generateRandomNumber(limits)
  }

  #setNumberOfMainColors (value: number): void {
    this.numberOfMainColors = value
  }

  /**
   * Picks a random hue from the array hues.
   *
   * @returns The hue that was picked.
   */
  protected pickRandomHue (): number {
    const firstIndex = this.#getFirstIndex()
    const lastIndex = this.#getLastIndex(this.hues)
    const randomIndex = this.generator.generateRandomNumber(new MaxMinObject(lastIndex, firstIndex))

    return this.#getHueFromHues(randomIndex)
  }

  #getFirstIndex (): number {
    return 0
  }

  #getLastIndex (refrence: number[]): number {
    return refrence.length - 1
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
