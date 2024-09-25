/**
 * Module for the class ColorThemeData.
 */

import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'

/**
 * Represents a color theme data.
 */
export class ColorThemeData {
  /**
   * The number of colors in the theme.
   */
  #numberOfColors: number

  /**
   * The color theme.
   */
  #colorTheme: ColorThemes

  /**
   * The colors in the theme.
   */
  #colors: Color[]

  /**
   * Creates a new Color object.
   *
   * @param numberOfColors - The number of colors in the theme.
   * @param colorTheme - The name of the colorTheme.
   * @param colors - The colors in the theme.
   */
  constructor (numberOfColors: number, colorTheme: ColorThemes, colors: Color[]) {
    this.#numberOfColors = numberOfColors
    this.#colorTheme = colorTheme
    this.#colors = colors
  }

  /**
   * Gets the numberOfColors of the object.
   *
   * @returns The numberOfColors.
   */
  get numberOfColors (): number {
    return this.#numberOfColors
  }

  /**
   * Gets the colorTheme of the object.
   *
   * @returns The colorTheme.
   */
  get colorTheme (): ColorThemes {
    return this.#colorTheme
  }

  /**
   * Gets the colors of the object.
   *
   * @returns A copy of the colors.
   */
  get colors (): Color[] {
    const copyOfColors = []
    for (const color of this.#colors) {
      const copyOfColor = new Color(color.hue, color.saturation, color.lightness)
      copyOfColors.push(copyOfColor)
    }

    return copyOfColors
  }

  /**
   * Sorts the colors by hue in ascending order.
   */
  sortColorsByHue (): void {
    // Does not return colors because of command query separation.
    this.#colors.sort((a, b) => a.hue - b.hue)
  }

  /**
   * Sorts the colors by saturation in ascending order.
   */
  sortColorsBySaturation (): void {
    // Does not return colors because of command query separation.
    this.#colors.sort((a, b) => a.saturation - b.saturation)
  }

  /**
   * Sorts the colors by lightness in ascending order.
   */
  sortColorsByLightness (): void {
    // Does not return colors because of command query separation.
    this.#colors.sort((a, b) => a.lightness - b.lightness)
  }
}
