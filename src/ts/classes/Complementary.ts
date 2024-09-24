/**
 * Module for the class Complementary.
 */

import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

/**
 * Represents a complementary color theme.
 */
export class Complementary extends MultiHueColorTheme {
  /**
   * Generates a color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 2 to 4.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  generateColorTheme (numberOfColors:number): ColorThemeData {
    this.argumentGuard.validateNumberArgument({
      maxValue: ArgumentLimits.ComplementaryMax,
      minValue: ArgumentLimits.ComplementaryMin,
      recievedArgument: numberOfColors
    })

    const colors: Color[] = []

    colors.push(...this.#generate2Colors())
    // Nested control statments and magic numbers.
    if (numberOfColors === 3) {
      if (this.lightness > 50) {
        colors.push(this.generateDarkColor())
      } else {
        colors.push(this.generateLightColor())
      }
    } else if (numberOfColors === 4) {
      colors.push(this.generateDarkColor())
      colors.push(this.generateLightColor())
    }

    const data = new ColorThemeData(numberOfColors, ColorThemes.Complementary, colors)
    return data
  }

  /**
   * Generates two complementary colors.
   *
   * @returns The two generated colors.
   */
  #generate2Colors (): Color[] {
    const numberOfColors = 2
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
