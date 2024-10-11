import { ColorThemes } from '../enums/ColorThemes.js'
import { MultiHueColorThemeMaker } from './MultiHueColorThemeMaker.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ValidationObject } from './ValidationObject.js'

export class TriadicThemeMaker extends MultiHueColorThemeMaker {
  constructor () {
    super(ArgumentLimits.TriadicMin)
    this.setCalculateHueFunction(this.#calculateHueOfMainColor)
  }

  /**
   * Generates an triadic color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 3 to 5.
   * @returns  An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
  */
  generateColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.getColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Triadic, colors)

    return data
  }

  #validateArgument (numberOfColors: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.TriadicMax,
      ArgumentLimits.TriadicMin,
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
