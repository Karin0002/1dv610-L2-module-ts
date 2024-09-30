import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

export class SplitComplementary extends MultiHueColorTheme {
  /**
   * Generates an split complementary color theme.
   *
  // Implicit instruction but that is explicit in the code through validation.
   * @param numberOfColors - The number of colors to include ranging from 3 to 5.
   * @returns  An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  generateColorTheme (numberOfColors: number): ColorThemeData {
    // Mixed abstraction levels.
    // Low-level: variables, array.push, control statements.
    // High-level: initiates objects, calls methods.
    this.argumentGuard.validateNumberArgumentWithMaxAndMin({
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

    const data = new ColorThemeData(ColorThemes.SplitComplementary, colors)

    return data
  }

  /**
   * Generates three split complementary colors.
   *
   * {@link https://chatgpt.com/share/ef0f277c-e1b3-4859-8f24-430d0fed1bf5}
   * @returns The three generated colors.
   */
  #generate3Colors (): Color[] {
    // Mixed abstraction level
    // Low-level: variables, array.push, loops, calculations.
    // High-level: initiates objects, calls method.
    const numberOfColors = 3
    const numberOfHues = 360
    const colors: Color[] = []

    for (let i = 0; i < numberOfColors; i++) {
      // Equation made with the help of chatGPT, see @link in comment.
      const hueIncrement = 30 * (-(3 / 2) * (i ** 2) + (13 / 2) * i) // ** is "power of"
      // Hard to read due to long line.
      const calculatedHue = (((this.hue + hueIncrement) % numberOfHues) === 0) ? this.hue + hueIncrement : (this.hue + hueIncrement) % numberOfHues
      this.hues.push(calculatedHue)
      const calculatedSaturation = this.numberCalculator.adjustNumberWithin10(this.saturation)

      const color = new Color(calculatedHue, calculatedSaturation, this.lightness)
      colors.push(color)
    }

    return colors
  }
}
