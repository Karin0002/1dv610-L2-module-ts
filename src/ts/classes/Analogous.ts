/**
 * Module for the class Analogous.
 */

import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

/**
 * Represents a analogous color theme.
 */
export class Analogous extends MultiHueColorTheme {
  /**
   * Generates a color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 3 to 5.
   * @returns  An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  generateColorTheme (numberOfColors: number): ColorThemeData {
    this.argumentGuard.validateNumberArgument({
      maxValue: ArgumentLimits.AnalogousMax,
      minValue: ArgumentLimits.AnalogousMin,
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
    const data = new ColorThemeData(numberOfColors, ColorThemes.Analogous, colors)
    return data
  }

  /**
   * Generates three analogous colors.
   *
   * @returns The three generated colors.
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
      const calculatedSaturation = this.numberCalculator.adjustNumber(this.saturation, 10)

      const color = new Color(calculatedHue, calculatedSaturation, this.lightness) // 10 for slight variation.
      colors.push(color)
    }

    return colors
  }
}
