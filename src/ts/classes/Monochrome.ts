/**
 * @file Module for the class Monochrome.
 * @module src/ts/classes/Monochrome
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorTheme } from './ColorTheme.js'
import { ColorSchemes } from '../enums/ColorSchemes.js'
import { Color } from './Color.js'
import { ColorThemeData } from './ColorThemeData.js'

/**
 * Represents a monochrome color theme.
 */
export class Monochrome extends ColorTheme {
  /**
   * Creates a new Monochrome object.
   */
  constructor () {
    super()
  }

  /**
   * Generates a color theme.
   *
   * @param {number} numberOfColors - The number of colors to include ranging from 2 to 5.
   * @throws {Error} The number of colors must be between 2 and 5.
   * @returns {ColorThemeData} An object containing data about the generated color theme.
   */
  generateColorTheme (numberOfColors:number): ColorThemeData {
    if (numberOfColors < 2 || numberOfColors > 5) {
      const error = new Error('The number of colors must be between 2 and 5.')
      // error.status = 400
      throw error
    }

    const colors: Color[] = []

    colors.push(...this.#generateColors(numberOfColors))

    // Prehaps ColorTheme can be the object that is returned??? 
    // So it has the fields numberOfColors, colorScheme and colors.
    const data = new ColorThemeData(numberOfColors, ColorSchemes.Monochrome, colors)
    return data
  }

  /**
   * Generates monochrome colors.
   *
   * @param {number} numberOfColors - The number of colors to generate.
   * @returns {Color[]} The generated colors.
   */
  #generateColors (numberOfColors:number): Color[] {
    const colors: Color[] = []
    const increments = numberOfColors - 1  // 1 since the number of increments is one less than number of colors.

    for (let i = 0; i < numberOfColors; i++) {
      const lightnessIncrement = (this.maxLightness - this.minLightness) / (increments)
      const calculatedLightness = this.minLightness + (lightnessIncrement * i)
      const saturation = this.adjustNumber(this.saturation, 10) // 10 for slight variation.

      const color = new Color(this.hue, saturation, calculatedLightness)
      colors.push(color)
    }

    return colors
  }
}
