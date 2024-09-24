/**
 * @file Module for the class Triadic.
 * @module src/ts/classes/Triadic
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorSchemes } from '../enums/ColorSchemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

/**
 * Represents a triadic color theme.
 */
export class Triadic extends MultiHueColorTheme {
  /**
   * Creates a new Triadic object.
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
    this.argumentGuard.validateNumberArgument({
      maxValue: ArgumentLimits.TriadicMax,
      minValue: ArgumentLimits.TriadicMin,
      recievedArgument: numberOfColors      
    })

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
    const data = new ColorThemeData(numberOfColors, ColorSchemes.Triadic, colors)
    return data
  }

  /**
   * Generates three triadic colors.
   *
   * @returns {Color[]} The three generated colors.
   */
  #generate3Colors (): Color[] {
    const numberOfColors = 3
    const numberOfHues = 360
    const hueIncrement = numberOfHues / numberOfColors
    const colors: Color[] = []

    for (let i = 0; i < numberOfColors; i++) {
      const calculatedHue = (((this.hue + (hueIncrement * i)) % numberOfHues) === 0) ? this.hue + (hueIncrement * i) : (this.hue + (hueIncrement * i)) % numberOfHues
      this.hues.push(calculatedHue)
      const calculatedSaturation = this.numberCalculator.adjustNumber(this.saturation, 10)

      const color = new Color(calculatedHue, calculatedSaturation, this.lightness) // 10 for slight variation.
      colors.push(color)
    }

    return colors
  }
}
