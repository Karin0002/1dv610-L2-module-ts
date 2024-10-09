import { ColorThemeMaker } from './ColorThemeMaker.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

export class MonochromeThemeMaker extends ColorThemeMaker {
  /**
   * Generates a monochrome color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 2 to 5.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
  */
  generateColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.#generateColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Monochrome, colors)

    return data
  }

  #validateArgument (numberOfColors: number) {
    this.argumentGuard.validateNumberArgumentWithMaxAndMin({
      maxValue: ArgumentLimits.MonochromeMax,
      minValue: ArgumentLimits.MonochromeMin,
      recievedArgument: numberOfColors
    })
  }

  /**
   * Generates monochrome colors.
   */
  #generateColors (numberOfColors: number): Color[] {
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
