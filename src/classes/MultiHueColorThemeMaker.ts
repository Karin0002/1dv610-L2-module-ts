import { ColorThemeMaker } from './ColorThemeMaker.js'
import { ColorValues } from '../enums/ColorValues.js'
import { Color } from './Color.js'
import { MaxMinObject } from './MaxMinObject.js'

export abstract class MultiHueColorThemeMaker extends ColorThemeMaker {
  #hues: number[]

  #lightness: number

  protected numberOfMainColors: number

  #calculateHueFunction: (hueIncrementFactor: number) => number

  constructor (numberOfMainColors: number) {
    super()
    this.#setHues()
    this.#setLightness(new MaxMinObject(ColorValues.LightnessMax, ColorValues.LightnessMin))
    this.#setNumberOfMainColors(numberOfMainColors)
  }

  #setHues (): void {
    this.#hues = []
  }

  /**
   * Sets the lightness with a randomly generated number that is between the arguments.
   */
  #setLightness (limits: MaxMinObject): void {
    this.#lightness = this.generator.generateRandomNumber(limits)
  }

  #setNumberOfMainColors (value: number): void {
    this.numberOfMainColors = value
  }

  protected setCalculateHueFunction (calculateHue: (hueIncrementFactor: number) => number): void {
    this.#calculateHueFunction = calculateHue
  }

  /**
   * Generates a set of colors in a color theme.
   *
   * @param numberOfColors - The number of colors to generate.
   * @returns An array containing the colors as Color objects.
   */
  protected getColors (numberOfColors: number): Color[] {
    return this.#generateColors(numberOfColors)
  }

  /**
   * Generates the colors in the theme.
   */
  #generateColors (numberOfColors: number): Color[] {
    const mainColors = this.#getMainColors()
    const contrastColors = this.#getContrastColors(numberOfColors)

    if (contrastColors) {
      return this.#mergeContrastColorsWithMainColors(contrastColors, mainColors)
    }
    return mainColors
  }

  /**
   * Generates the main colors.
   *
   * @returns An array containing the generated colors.
   */
  #getMainColors (): Color[] {
    const colors: Color[] = []
    for (let i = 0; i < this.numberOfMainColors; i++) {
      colors.push(this.#generateMainColor(i))
    }

    return colors
  }

  /**
   * @param loopCount - The number of the current loop, used for calculating hue.
   */
  #generateMainColor (loopCount: number): Color {
    const hue = this.#calculateHueFunction(loopCount)
    this.#addHueToHues(hue)
    const saturation = this.generator.adjustNumberWithin10(this.saturation)

    return new Color(hue, saturation, this.#lightness)
  }

  #addHueToHues (hue: number): void {
    this.#hues.push(hue)
  }

  #getContrastColors (numberOfColorsInTheme: number): Color[] {
    if (this.#shouldGenerateContrastColors(numberOfColorsInTheme)) {
      return this.#generateContrastColors(numberOfColorsInTheme)
    }
    return []
  }

  #shouldGenerateContrastColors (numberOfColorsInTheme: number): boolean {
    const numberOfColorsForContrastColor = this.numberOfMainColors + 1
    if (numberOfColorsInTheme >= numberOfColorsForContrastColor) {
      return true
    }
    return false
  }

  #generateContrastColors (numberOfColorsInTheme: number): Color[] {
    if (this.#shouldGenerateMultipleContrastColor(numberOfColorsInTheme)) {
      return this.#generateMultipleContrastColors()
    } else {
      return this.#generateSingleContrastColor()
    }
  }

  #shouldGenerateMultipleContrastColor (numberOfColorsInTheme: number): boolean {
    const numberOfColorsForMultipleContrastColors = this.numberOfMainColors + 2
    if (numberOfColorsInTheme === numberOfColorsForMultipleContrastColors) {
      return true
    }
    return false
  }

  #generateMultipleContrastColors (): Color[] {
    return [this.#generateDarkColor(), this.#generateLightColor()]
  }

  /**
   * Generates a dark color for the color theme with a random hue from hues.
   *
   * @returns The generated color.
   */
  #generateDarkColor (): Color {
    const calculatedSaturation = this.generator.adjustNumberWithin10(this.saturation)

    const color = new Color(this.#pickRandomHue(), calculatedSaturation, this.minLightness)
    return color
  }

  /**
   * Picks a random hue from the array hues.
   *
   * @returns The hue that was picked.
   */
  #pickRandomHue (): number {
    const firstIndex = this.#getFirstIndex()
    const lastIndex = this.#getLastIndex(this.#hues)
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
    return this.#hues[index]
  }

  /**
   * Generates a light color for the color theme with a random hue from hues.
   *
   * @returns The generated color.
   */
  #generateLightColor (): Color {
    const calculatedSaturation = this.generator.adjustNumberWithin10(this.saturation)

    const color = new Color(this.#pickRandomHue(), calculatedSaturation, this.maxLightness)
    return color
  }

  #generateSingleContrastColor (): Color[] {
    if (this.#shouldGenerateDarkContrastColor(this.#lightness)) {
      return [this.#generateDarkColor()]
    } else {
      return [this.#generateLightColor()]
    }
  }

  #shouldGenerateDarkContrastColor (lightnessOfMainColors: number): boolean {
    const fullLightness = 100
    const halftLightness = fullLightness / 2
    if (lightnessOfMainColors > halftLightness) {
      return true
    }
    return false
  }

  #mergeContrastColorsWithMainColors (contrastColors: Color[], mainColors: Color[]): Color[] {
    return [...mainColors, ...contrastColors]
  }
}
