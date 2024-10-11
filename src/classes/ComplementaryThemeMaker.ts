import { MultiHueColorThemeMaker } from './MultiHueColorThemeMaker.js'
import { ValidationObject } from './ValidationObject.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ColorThemes } from '../enums/ColorThemes.js'

export class ComplementaryThemeMaker extends MultiHueColorThemeMaker {
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
  generateColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.getColors(numberOfColors)
    // const colors = this.#generateColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Complementary, colors)

    return data
  }

  #validateArgument (numberOfColors: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.ComplementaryMax,
      ArgumentLimits.ComplementaryMin,
      numberOfColors
    )
    this.argumentGuard.validateNumberArgumentWithMaxAndMin(validationValues)
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
