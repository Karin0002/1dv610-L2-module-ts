import { Triadic } from './Triadic.js'
import { Analogous } from './Analogous.js'
import { Complementary } from './Complementary.js'
import { SplitComplementary } from './SplitComplementary.js'
import { Monochrome } from './Monochrome.js'
import { ColorTheme } from './ColorTheme.js'
import { ColorThemeData } from './ColorThemeData.js'
import { Guard } from './Guard.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { Calculator } from './Calculator.js'

export class RandomColorTheme {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  /**
   * The object to use for generating random numbers.
   */
  #numberCalculator: Calculator

  #analogous: Analogous

  #complementary: Complementary

  #monochrome: Monochrome

  #splitComplementary: SplitComplementary

  #triadic: Triadic

  constructor () {
    this.#argumentGuard = new Guard()
    this.#numberCalculator = new Calculator()
    this.#analogous = new Analogous()
    this.#complementary = new Complementary()
    this.#monochrome = new Monochrome()
    this.#splitComplementary = new SplitComplementary()
    this.#triadic = new Triadic()
  }

  /**
   * Generates a random color theme using analogous, complementary, monochrome, split complementary or triadic.
   *
   * @param numberOfColors - Optional, the number of colors to include ranging from 2 to 5.
   * @returns An object containing data about the generated color theme.
   * @throws Error if the arguments does not pass the validation.
  */
  // Implicit instruction in comment but that is explicit in the code through validation.
  generateColorTheme (numberOfColors?: number): ColorThemeData {
    // Mixed abstraction levels.
    // Low-level: variables, control statements.
    // High-level: calls methods.
    if (numberOfColors) {
      this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
        maxValue: ArgumentLimits.RandomColorThemeMax,
        minValue: ArgumentLimits.RandomColorThemeMin,
        recievedArgument: numberOfColors
      })

      return this.#getSingleColorTheme(numberOfColors)
    } else {
      const randomNumberOfColors = this.#numberCalculator.generateRandomNumber(ArgumentLimits.RandomColorThemeMax, ArgumentLimits.RandomColorThemeMin)

      return this.#getSingleColorTheme(randomNumberOfColors)
    }
  }

  #getSingleColorTheme (numberOfColors: number): ColorThemeData {
    const themes = this.#getThemesWithNColors(numberOfColors)
    const randomIndex = this.#numberCalculator.generateRandomNumber(themes.length - 1, 0)
    const theme = themes[randomIndex]

    return theme.generateColorTheme(numberOfColors)
  }

  /**
   * Gets an array of themes that can take a certain amount of colors.
   *
   * @param n - The number of colors the theme must be able to handle.
   * @returns An array of themes.
   */
  // The name of the argument is only one character which is typically not
  // good and is not searchable, but combined with the name of the method
  // it works in my opinion since it sets it in a context.
  #getThemesWithNColors (n: number): ColorTheme[] {
    // Breaks open/close rule.
    const themes = []
    // let themes
    // Switch statement which are generally bad.
    switch (n) {
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
}
