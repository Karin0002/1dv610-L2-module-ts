import { ColorTheme } from './ColorTheme.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

export class Monochrome extends ColorTheme {
  /**
   * Generates a monochrome color theme.
   *
  // Implicit instruction but that is explicit in the code through validation.
   * @param numberOfColors - The number of colors to include ranging from 2 to 5.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  generateColorTheme (numberOfColors: number): ColorThemeData {
    // Mixed abstraction levels.
    // Low-level: variables, array.push.
    // High-level: initiates objects, calls methods.
    this.argumentGuard.validateNumberArgumentWithMaxAndMin({
      maxValue: ArgumentLimits.MonochromeMax,
      minValue: ArgumentLimits.MonochromeMin,
      recievedArgument: numberOfColors
    })

    const colors: Color[] = []

    colors.push(...this.#generateColors(numberOfColors))

    const data = new ColorThemeData(ColorThemes.Monochrome, colors)

    return data
  }

  /**
   * Generates monochrome colors.
   *
   * @param numberOfColors - The number of colors to generate.
   * @returns The generated colors.
   */
  #generateColors (numberOfColors: number): Color[] {
    // Mixed abstraction level
    // Low-level: variables, array.push, loops, calculations.
    // High-level: initiates objects, calls method.
    const colors: Color[] = []
    const increments = numberOfColors - 1 // 1 since the number of increments is one less than number of colors.

    for (let i = 0; i < numberOfColors; i++) {
      const lightnessIncrement = (this.maxLightness - this.minLightness) / (increments)
      const calculatedLightness = this.minLightness + (lightnessIncrement * i)
      const calculatedSaturation = this.numberCalculator.adjustNumberWithin10(this.saturation)

      const color = new Color(this.hue, calculatedSaturation, calculatedLightness)
      colors.push(color)
    }

    return colors
  }
}
