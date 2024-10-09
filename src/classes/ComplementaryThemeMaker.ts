import { MultiHueColorTheme } from './MultiHueColorTheme.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'

export class ComplementaryThemeMaker extends MultiHueColorTheme {

  constructor () {
    super(ArgumentLimits.ComplementaryMin)
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

    const colors = this.#generateColors(numberOfColors)
    const data = new ColorThemeData(ColorThemes.Complementary, colors)

    return data
  }

  #validateArgument(numberOfColors: number): void {
    this.argumentGuard.validateNumberArgumentWithMaxAndMin({
      maxValue: ArgumentLimits.ComplementaryMax,
      minValue: ArgumentLimits.ComplementaryMin,
      recievedArgument: numberOfColors
    })
  }

  /**
   * Generates the colors in the theme.
   */
  #generateColors (numberOfColors: number): Color[] {
    const mainColors = this.#getMainColors()
    const contrastColors = this.#getContrastColors(numberOfColors)

    if (contrastColors) {
      return this.#mergeContrastColorsWithMainColors(contrastColors, mainColors)
    }
    return mainColors
  }

  /**
   * Generates two complementary colors.
   *
   * @returns An array containing the two generated colors.
   */
  #getMainColors (): Color[] {
    const colors: Color[] = []
    for (let i = 0; i < this.numberOfMainColors; i++) {
      colors.push(this.#generateMainColor(i))
    }

    return colors
  }

  /**
   * @param loopCount - The number of the current loop, used for calculating hue.
   */
  #generateMainColor(loopCount: number): Color {
    const hue = this.#calculateHueOfMainColor(loopCount)
    const saturation = this.generator.adjustNumberWithin10(this.saturation)

    return new Color(hue, saturation, this.lightness)
  }

  #calculateHueOfMainColor(hueIncrementFactor: number): number {
    const numberOfHues = 360
    const hueIncrement = numberOfHues / this.numberOfMainColors

    if (((this.hue + (hueIncrement * hueIncrementFactor)) % numberOfHues) === 0) {
      return this.hue + (hueIncrement * hueIncrementFactor)
    } else {
      return (this.hue + (hueIncrement * hueIncrementFactor)) % numberOfHues
    }
  }

  #getContrastColors (numberOfColorsInTheme: number): Color[] {
    if (this.#shouldGenerateContrastColors(numberOfColorsInTheme)) {
      return this.#generateContrastColors(numberOfColorsInTheme)
    }
    return []
  }

  #shouldGenerateContrastColors (numberOfColorsInTheme: number): boolean {
    const numberOfColorsForContrastColor = ArgumentLimits.ComplementaryMax - 1
    if (numberOfColorsInTheme >= numberOfColorsForContrastColor) {
      return true
    }
    return false
  }

  #generateContrastColors (numberOfColorsInTheme: number): Color[] {
    if (this.#shouldGenerateMultipleContrastColor(numberOfColorsInTheme)) {
      return this.#generateMultipleContrastColors()
    } else {
      return this.#generateSingleContrastColor()
    }
  }

  #shouldGenerateMultipleContrastColor (numberOfColorsInTheme: number): boolean {
    const numberOfColorsForMultipleContrastColors = ArgumentLimits.ComplementaryMax
    if (numberOfColorsInTheme === numberOfColorsForMultipleContrastColors) {
      return true
    }
    return false
  }

  #generateMultipleContrastColors (): Color[] {
    return [this.generateDarkColor(), this.generateLightColor()]
  }

  #generateSingleContrastColor (): Color[] {
    if (this.#shouldGenerateDarkContrastColor(this.lightness)) {
      return [this.generateDarkColor()]
    } else {
      return [this.generateLightColor()]
    }
  }

  #shouldGenerateDarkContrastColor (lightnessOfMainColors: number): boolean {
    const fullLightness = 100
    const halftLightness = fullLightness / 2
    if (lightnessOfMainColors > halftLightness) {
      return true
    }
    return false
  }

  #mergeContrastColorsWithMainColors (contrastColors: Color[], mainColors: Color[],): Color[] {
    return [...mainColors, ...contrastColors]
  }
}
