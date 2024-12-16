import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { MultiHueColorThemeFactory } from './MultiHueColorThemeFactory.js'
import { ValidationObject } from './ValidationObject.js'

export class ComplementaryThemeFactory extends MultiHueColorThemeFactory {
  constructor () {
    super(ArgumentLimits.ComplementaryMin)
    this.setCalculateHueFunction(this.#calculateHueOfMainColor)
  }

  /**
   * Generates a complementary color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 2 to 4.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  getColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.getColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Complementary, colors)

    return data
  }

  #validateArgument (numberOfColors: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.ComplementaryMax,
      ArgumentLimits.ComplementaryMin,
      numberOfColors
    )
    this.validator.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #calculateHueOfMainColor (hueIncrementFactor: number): number {
    const numberOfHues = 360
    const hueIncrement = numberOfHues / this.numberOfMainColors

    if (((this.hue + (hueIncrement * hueIncrementFactor)) % numberOfHues) === 0) {
      return this.hue + (hueIncrement * hueIncrementFactor)
    } else {
      return (this.hue + (hueIncrement * hueIncrementFactor)) % numberOfHues
    }
  }
}
