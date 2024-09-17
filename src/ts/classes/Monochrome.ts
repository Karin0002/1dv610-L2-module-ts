/**
 * @file Module for the class MonochromeColorTheme.
 * @module src/ts/classes/MonochromeColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorTheme } from './ColorTheme.js'
import { ColorThemes } from './colorThemes.js'
import { Color } from './Color.js'

/**
 * Represents a monochrome color theme.
 */
export class Monochrome extends ColorTheme {
  /**
   * Creates a new ColorTheme object.
   */
  constructor () {
    super()
  }

  /**
   * Generates a color theme.
   *
   * @param {number} numberOfColors - The number of colors to include ranging from 2 to 5.
   * @throws {Error} The number of colors must be between 2 and 5.
   * @returns {object} An object containing data about the generated color theme.
   */
  generateColorTheme (numberOfColors:number): {numberOfColors: number, colorScheme: ColorThemes, colors: Color[]} {
    if (numberOfColors < 2 || numberOfColors > 5) {
      const error = new Error('The number of colors must be between 2 and 5.')
      // error.status = 400
      throw error
    }

    const colors: Color[] = []
    const colorTheme = {
      numberOfColors,
      colorScheme: ColorThemes.Monochrome,
      colors
    }

    for (let i = 0; i < numberOfColors; i++) {
      // MAGIC NUMBER
      const lightnessIncrement = (this.maxLightness - this.minLightness) / (numberOfColors - 1) // 1 since the number of increments is one less than number of colors.
      const calculatedLightness = this.minLightness + (lightnessIncrement * i)
      const saturation = this.adjustNumber(this.saturation, 10) // 10 for slight variation.

      const color = new Color(this.hue, saturation, calculatedLightness)

      colorTheme.colors.push(color)
    }

    return colorTheme
  }
}
