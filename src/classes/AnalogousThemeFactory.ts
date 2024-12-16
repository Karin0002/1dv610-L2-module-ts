import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { ColorThemeData } from './ColorThemeData.js'
import { MultiHueColorThemeFactory } from './MultiHueColorThemeFactory.js'
import { ValidationObject } from './ValidationObject.js'

export class AnalogousThemeFactory extends MultiHueColorThemeFactory {
  constructor () {
    super(ArgumentLimits.AnalogousMin)
    this.setCalculateHueFunction(this.#calculateHueOfMainColor)
  }

  /**
   * Generates an analogous color theme.
   *
   * @param numberOfColors - The number of colors to include ranging from 3 to 5.
   * @returns  An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
   */
  getColorTheme (numberOfColors: number): ColorThemeData {
    this.#validateArgument(numberOfColors)

    const colors = this.getColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Analogous, colors)

    return data
  }

  #validateArgument (numberOfColors: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.AnalogousMax,
      ArgumentLimits.AnalogousMin,
      numberOfColors
    )
    this.validator.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #calculateHueOfMainColor (hueIncrementFactor: number): number {
    const numberOfHues = 360
    const hueIncrement = 30 // 30 because each section of the colorwheel is 30 degrees.
    if (((this.hue + (hueIncrement * hueIncrementFactor)) % numberOfHues) === 0) {
      return this.hue + (hueIncrement * hueIncrementFactor)
    } else {
      return (this.hue + (hueIncrement * hueIncrementFactor)) % numberOfHues
    }
  }
}
