/**
 * @file Module for the class ColorThemeData.
 * @module src/ts/classes/ColorThemeData
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorSchemes } from "./ColorSchemes.js"
import { Color } from "./Color.js"

/**
 * Represents a color theme data.
 */
export class ColorThemeData {
  /**
   * The number of colors in the theme.
   *
   * @type {number}
   */
  #numberOfColors: number

  /**
   * The color scheme of the color theme.
   *
   * @type {ColorSchemes}
   */
  #colorScheme: ColorSchemes

  /**
   * The colors in the theme.
   *
   * @type {Color[]}
   */
  #colors: Color[]

  /**
   * Creates a new Color object.
   *
   * @param {number} numberOfColors - The number of colors in the theme.
   * @param {ColorSchemes} colorScheme - The colorScheme of the theme.
   * @param {Color[]} colors - The colors in the theme.
   * @class
   */
  constructor (numberOfColors: number, colorScheme: ColorSchemes, colors: Color[]) {
    this.#numberOfColors = numberOfColors
    this.#colorScheme = colorScheme
    this.#colors = colors
  }

  /**
   * Gets the numberOfColors of the object.
   *
   * @returns {number} The numberOfColors.
   */
  get numberOfColors ():number {
    return this.#numberOfColors
  }
  
  /**
   * Gets the colorScheme of the object.
   *
   * @returns {ColorSchemes} The colorScheme.
   */
  get colorScheme ():ColorSchemes {
    return this.#colorScheme
  }

  /**
   * Gets the colors of the object.
   *
   * @returns {Color[]} A copy of the colors.
   */
  get colors ():Color[] {
    const copyOfColors = []
    for (let i = 0; i < this.#colors.length; i++) {
      const copyOfColor = new Color(this.#colors[i].hue, this.#colors[i].saturation, this.#colors[i].lightness)
      copyOfColors.push(copyOfColor)
    }
    return copyOfColors
  }

  /**
   * Sorts the colors by hue in ascending order.
   */
  sortColorsByHue () {
    // Does not return colors because of command query separation.
    this.#colors.sort((a, b) => a.hue - b.hue)
  }

  /**
   * Sorts the colors by saturation in ascending order.
   */
  sortColorsBySaturation () {
    // Does not return colors because of command query separation.
    this.#colors.sort((a, b) => a.saturation - b.saturation)
  }

  /**
   * Sorts the colors by lightness in ascending order.
   */
  sortColorsByLightness () {
    // Does not return colors because of command query separation.
    this.#colors.sort((a, b) => a.lightness - b.lightness)
  }
}
