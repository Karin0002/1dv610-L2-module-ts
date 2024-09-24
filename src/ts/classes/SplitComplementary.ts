/**
 * @file Module for the class SplitComplementary.
 * @module src/ts/classes/SplitComplementary
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorSchemes } from '../enums/ColorSchemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { Guard } from './Guard.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

/**
 * Represents a split complementary color theme.
 */
export class SplitComplementary extends MultiHueColorTheme {
  /**
   * Creates a new SplitComplementary object.
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
      maxValue: ArgumentLimits.SplitComplementaryMax,
      minValue: ArgumentLimits.SplitComplementaryMin,
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
    const data = new ColorThemeData(numberOfColors, ColorSchemes.SplitComplementary, colors)
    return data
  }

  /**
   * Generates three split complementary colors.
   *
   * @link https://chatgpt.com/share/ef0f277c-e1b3-4859-8f24-430d0fed1bf5
   * @returns {Color[]} The three generated colors.
   */
  #generate3Colors (): Color[] {
    const numberOfColors = 3
    const numberOfHues = 360
    const colors: Color[] = []

    for (let i = 0; i < numberOfColors; i++) {
      // Equation made with the help of chatGPT, see @link in comment.
      const hueIncrement = 30 * (-(3 / 2) * (i ** 2) + (13 / 2) * i) // ** is "power of"
      const calculatedHue = (((this.hue + hueIncrement) % numberOfHues) === 0) ? this.hue + hueIncrement : (this.hue + hueIncrement) % numberOfHues
      this.hues.push(calculatedHue)

      const color = new Color(calculatedHue, this.adjustNumber(this.saturation, 10), this.lightness) // 10 for slight variation.
      colors.push(color)
    }

    return colors
  }
}
