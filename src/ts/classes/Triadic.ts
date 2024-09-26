/**
 * Module for the class Triadic.
 */

import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

/**
 * Represents a triadic color theme.
 */
export class Triadic extends MultiHueColorTheme {
  /**
   * Generates a color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 3 to 5.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  generateColorTheme (numberOfColors: number): ColorThemeData {
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

    const data = new ColorThemeData(numberOfColors, ColorThemes.Triadic, colors)
    return data
  }

  /**
   * Generates three triadic colors.
   *
   * @returns The three generated colors.
   */
  #generate3Colors (): Color[] {
    const numberOfColors = 3
    const numberOfHues = 360
    const hueIncrement = numberOfHues / numberOfColors
    const colors: Color[] = []

    for (let i = 0; i < numberOfColors; i++) {
      const calculatedHue = (((this.hue + (hueIncrement * i)) % numberOfHues) === 0) ? this.hue + (hueIncrement * i) : (this.hue + (hueIncrement * i)) % numberOfHues
      this.hues.push(calculatedHue)
      const calculatedSaturation = this.numberCalculator.adjustNumberWithin10(this.saturation, 10)

      const color = new Color(calculatedHue, calculatedSaturation, this.lightness) // 10 for slight variation.
      colors.push(color)
    }

    return colors
  }
}
