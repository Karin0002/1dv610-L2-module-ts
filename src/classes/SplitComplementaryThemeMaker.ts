import { ValidationObject } from './ValidationObject.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { MultiHueColorThemeMaker } from './MultiHueColorThemeMaker.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

export class SplitComplementaryThemeMaker extends MultiHueColorThemeMaker {
  constructor () {
    super(ArgumentLimits.SplitComplementaryMin)
    this.setCalculateHueFunction(this.#calculateHueOfMainColor)
  }

  /**
   * Generates an split complementary color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 3 to 5.
   * @returns  An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
  */
  generateColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.getColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.SplitComplementary, colors)

    return data
  }

  #validateArgument (numberOfColors: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.SplitComplementaryMax,
      ArgumentLimits.SplitComplementaryMin,
      numberOfColors
    )
    this.argumentGuard.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  /**
   * {@link https://chatgpt.com/share/ef0f277c-e1b3-4859-8f24-430d0fed1bf5}
   */
  #calculateHueOfMainColor (hueIncrementFactor: number): number {
    const numberOfHues = 360
    // Equation made with the help of chatGPT, see @link in comment.
    const hueIncrement = 30 * (-(3 / 2) * (hueIncrementFactor ** 2) + (13 / 2) * hueIncrementFactor) // ** is "power of"
    if (((this.hue + hueIncrement) % numberOfHues) === 0) {
      return this.hue + hueIncrement
    } else {
      return (this.hue + hueIncrement) % numberOfHues
    }
  }
}
