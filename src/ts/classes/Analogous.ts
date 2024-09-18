/**
 * @file Module for the class Analogous.
 * @module src/ts/classes/Analogous
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorSchemes } from './ColorSchemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'

/**
 * Represents a analogous color theme.
 */
export class Analogous extends MultiHueColorTheme {
  /**
   * Creates a new Analogous object.
   */
  constructor () {
    super()
  }

  /**
   * Generates a color theme.
   *
   * @param {number} numberOfColors - The number of colors to include ranging from 3 to 5.
   * @throws {Error} The number of colors must be between 3 and 5.
   * @returns {ColorThemeData} An object containing data about the generated color theme.
   */
  generateColorTheme (numberOfColors:number): ColorThemeData {
    if (numberOfColors < 3 || numberOfColors > 5) {
      const error = new Error('The number of colors must be between 3 and 5.')
      // error.status = 400
      throw error
    }

    const colors: Color[] = []

    colors.push(...this.#generate3Colors())
    // Nested control statments and magic numbers.
    if (numberOfColors === 4) {
      if (this.lightness > 50) {
        colors.push(this.generateDarkColor())
      } else {
        colors.push(this.generateLightColor())
      }
    } else if (numberOfColors === 5) {
      colors.push(this.generateDarkColor())
      colors.push(this.generateLightColor())
    }

    // Prehaps ColorTheme can be the object that is returned??? 
    // So it has the fields numberOfColors, colorScheme and colors.
    const data = new ColorThemeData(numberOfColors, ColorSchemes.Analogous, colors)
    return data
  }

  /**
   * Generates three analogous colors.
   *
   * @returns {Color[]} The three generated colors.
   */
  #generate3Colors (): Color[] {
    const numberOfColors = 3
    const numberOfHues = 360
    // Only difference between Analogous and Triadic is hueInterval and ColorSchemes, otherwise identical.
    const hueIncrement = 30 // 30 because each section of the colorwheel is 30 degrees.
    const colors: Color[] = []

    for (let i = 0; i < numberOfColors; i++) {
      const calculatedHue = (((this.hue + (hueIncrement * i)) % numberOfHues) === 0) ? this.hue + (hueIncrement * i) : (this.hue + (hueIncrement * i)) % numberOfHues
      this.hues.push(calculatedHue)

      const color = new Color(calculatedHue, this.adjustNumber(this.saturation, 10), this.lightness) // 10 for slight variation.
      colors.push(color)
    }

    return colors
  }
}
