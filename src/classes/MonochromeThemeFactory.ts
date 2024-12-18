import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { Color } from './Color.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ColorThemeFactory } from './ColorThemeFactory.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { ValidationObject } from './ValidationObject.js'
import { ColorValues } from '../enums/ColorValues.js'
import { MaxMinObject } from './MaxMinObject.js'

export class MonochromeThemeFactory extends ColorThemeFactory {
  /**
   * Generates a monochrome color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 2 to 5.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  getColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.#generateColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Monochrome, colors)

    return data
  }

  #validateArgument (numberOfColors: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.MonochromeMax,
      ArgumentLimits.MonochromeMin,
      numberOfColors
    )
    this.validator.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  /**
   * Generates monochrome colors.
   */
  #generateColors (numberOfColors: number): Color[] {
    this.setHue(new MaxMinObject(ColorValues.HueMax, ColorValues.HueMin))

    const colors: Color[] = []
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(this.#generateColor(numberOfColors, i))
    }

    return colors
  }

  /**
   * @param loopCount - The number of the current loop, used for calculating hue.
   */
  #generateColor (numberOfColors: number, loopCount: number): Color {
    const saturation = this.generator.adjustNumberWithin10(this.saturation)
    const lightness = this.#calculateLightnessOfMainColor(numberOfColors, loopCount)

    return new Color(this.hue, saturation, lightness)
  }

  #calculateLightnessOfMainColor (numberOfColors: number, lightIncrementFactor: number): number {
    const increments = numberOfColors - 1 // 1 since the number of increments is one less than number of colors.
    const lightnessIncrement = (this.maxLightness - this.minLightness) / increments
    return this.minLightness + (lightnessIncrement * lightIncrementFactor)
  }
}
