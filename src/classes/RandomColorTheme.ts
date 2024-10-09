import { Guard } from './Guard.js'
import { NumberGenerator } from './NumberGenerator.js'
import { AnalogousThemeMaker } from './AnalogousThemeMaker.js'
import { ComplementaryThemeMaker } from './ComplementaryThemeMaker.js'
import { MonochromeThemeMaker } from './MonochromeThemeMaker.js'
import { SplitComplementary } from './SplitComplementary.js'
import { Triadic } from './Triadic.js'
import { ColorThemeData } from './ColorThemeData.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ColorThemeMaker } from './ColorThemeMaker.js'

export class RandomColorTheme {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  /**
   * The object to use for generating random numbers.
   */
  #generator: NumberGenerator

  #analogous: AnalogousThemeMaker

  #complementary: ComplementaryThemeMaker

  #monochrome: MonochromeThemeMaker

  #splitComplementary: SplitComplementary

  #triadic: Triadic

  constructor () {
    this.#argumentGuard = new Guard()
    this.#generator = new NumberGenerator()
    this.#analogous = new AnalogousThemeMaker()
    this.#complementary = new ComplementaryThemeMaker()
    this.#monochrome = new MonochromeThemeMaker()
    this.#splitComplementary = new SplitComplementary()
    this.#triadic = new Triadic()
  }

  /**
   * Generates a random color theme with analogous, complementary, monochrome, split complementary or triadic colors.
   *
   * @param numberOfColors - The number of colors to include ranging from 2 to 5.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
  */
  generateColorTheme (numberOfColors: number): ColorThemeData

  /**
   * Generates a random color theme with analogous, complementary, monochrome, split complementary or triadic colors.
   *
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
  */
  generateColorTheme (): ColorThemeData

  generateColorTheme (numberOfColors?: number): ColorThemeData {
    if (numberOfColors) {
      this.#validateArgument(numberOfColors)
      return this.#getSingleColorTheme(numberOfColors)
    } else {
      return this.#getSingleColorTheme(this.#getRandomNumber())
    }
  }

  #validateArgument (numberOfColors: number): void {
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      max: ArgumentLimits.RandomColorThemeMax,
      min: ArgumentLimits.RandomColorThemeMin,
      recieved: numberOfColors
    })
  }

  #getRandomNumber (): number {
    return this.#generator.generateRandomNumber({
      max: ArgumentLimits.RandomColorThemeMax,
      min: ArgumentLimits.RandomColorThemeMin
    })
  }

  #getSingleColorTheme (numberOfColors: number): ColorThemeData {
    const themes = this.#getThemes(numberOfColors)
    const randomIndex = this.#generator.generateRandomNumber({
      max: themes.length - 1,
      min: 0
    })
    const theme = themes[randomIndex]

    return theme.generateColorTheme(numberOfColors)
  }

  #getRandomThemeFromThemes (numberOfColors: number): ColorThemeMaker {
    const themes = this.#getThemes(numberOfColors)
    const indexLimits = this.#getFirstAndLastIndex(themes)
    const randomIndex = this.#generator.generateRandomNumber({
      max: indexLimits.lastIndex,
      min: indexLimits.firstIndex
    })
    return this.#getTheme(themes, randomIndex)
  }

  /**
   * Gets an array of themes that can take a certain amount of colors.
   *
   * @param numberOfColorsInTheme - The number of colors the theme must be able to handle.
   * @returns An array of themes.
   */
  #getThemes (numberOfColorsInTheme: number): ColorThemeMaker[] {
    const themes = []
    switch (numberOfColorsInTheme) {
      case 2:
        themes.push(this.#complementary, this.#monochrome)
        break
      case 3:
        themes.push(this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic)
        break
      case 4:
        themes.push(this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic)
        break
      default:
        // Represents case 5.
        themes.push(this.#analogous, this.#monochrome, this.#splitComplementary, this.#triadic)
        break
    }

    return themes
  }

  #getTheme (themes: ColorThemeMaker[], index: number): ColorThemeMaker {
    return themes[index]
  }
}
