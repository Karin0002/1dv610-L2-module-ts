/**
 * @file Module for the class MonochromeColorTheme.
 * @module src/ts/classes/MonochromeColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorThemes } from './colorThemes'
import { Color } from './Color'

/**
 * Represents a monochrome color theme.
 */
class Monochrome extends ColorTheme {
  /**
   * Creates a new ColorTheme object.
   *
   * @param {number} [saturationMaxValue=90] - The maximum value saturation can be set to.
   * @param {number} [saturationMinValue=30] - The minimum value saturation can be set to.
   * @param {number} [hueMaxValue=360] - The maximum value hue can be set to.
   * @param {number} [hueMinValue=0] - The minimum value hue can be set to.
   * @param {number} [minLightness=20] - The lightness value of the darkest color in the color theme.
   * @param {number} [maxLightness=80] - The lightness value of the lightest color in the color theme.
   * @class
   */
  constructor (saturationMaxValue:number = 90, saturationMinValue:number = 30, hueMaxValue:number = 360, hueMinValue:number = 0,maxLightness:number = 80, minLightness:number = 20) {
    super()
  }

  /**
   * 
   * @param numberOfColors 
   */
  generateColorTheme (numberOfColors:number): object {
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
