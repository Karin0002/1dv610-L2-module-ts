/**
 * @file Module for the class RandomColorTheme.
 * @module src/ts/classes/RandomColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { Triadic } from "./Triadic.js"
import { Analogous } from "./Analogous.js"
import { Complementary } from "./Complementary.js"
import { SplitComplementary } from "./SplitComplementary.js"
import { Monochrome } from "./Monochrome.js"
import { ColorTheme } from "./ColorTheme.js"
import { ColorThemeData } from "./ColorThemeData.js"
import { Guard } from "./Guard.js"
import { ArgumentLimits } from "../enums/ArgumentLimits.js"
import { Calculator } from "./Calculator.js"

/**
 * Represents a random color theme.
 */
export class RandomColorTheme {
  /**
   * The guard to validate arguments.
   *
   * @type {Guard}
   */
  #argumentGuard: Guard

  /**
   * The object to use for math calculations.
   *
   * @type {Calculator}
   */
  #numberCalculator: Calculator

  /**
   * The object to use for generating triadic color themes.
   *
   * @type {Analogous}
   */
  #analogous: Analogous

  /**
   * The object to use for generating complementary color themes.
   *
   * @type {Complementary}
   */
  #complementary: Complementary

  /**
   * The object to use for generating monochrome color themes.
   *
   * @type {Monochrome}
   */
  #monochrome: Monochrome

  /**
   * The object to use for generating split complementary color themes.
   *
   * @type {SplitComplementary}
   */
  #splitComplementary: SplitComplementary

  /**
   * The object to use for generating triadic color themes.
   *
   * @type {Triadic}
   */
  #triadic: Triadic

  /**
   * Creates a new RandomColorTheme object.
   *
   * @class
   */
  constructor () {
    this.#argumentGuard = new Guard()
    this.#numberCalculator = new Calculator()
    this.#analogous = new Analogous()
    this.#complementary = new Complementary()
    this.#monochrome = new Monochrome()
    this.#splitComplementary = new SplitComplementary()
    this.#triadic = new Triadic()
  }

  generateColorTheme (numberOfColors?:number): ColorThemeData {
    if (numberOfColors !== undefined) {
      this.#argumentGuard.validateNumberArgument({
        maxValue: ArgumentLimits.RandomColorThemeMax,
        minValue: ArgumentLimits.RandomColorThemeMin,
        recievedArgument: numberOfColors
      })

      return this.#getColorTheme(numberOfColors)
    } else {
      const randomNumberOfColors = this.#numberCalculator.generateRandomNumber(ArgumentLimits.RandomColorThemeMax, ArgumentLimits.RandomColorThemeMin)

      return this.#getColorTheme(randomNumberOfColors)
    }
  }

  #getColorTheme (numberOfColors:number) {
    const themes = this.#getThemesWithNColors(numberOfColors)
    const randomIndex = this.#numberCalculator.generateRandomNumber(themes.length, 0)
    const theme = themes[randomIndex]
    return theme.generateColorTheme(numberOfColors)
  }

  // The name of the argument is only one character which is typically not good,
  // but combined with the name of the method it works in my opinion since it sets it in a context.
  #getThemesWithNColors (n:number): ColorTheme[] {
    // Breaks open/close rule.
    let themes
    switch (n) {
      case 2:
        themes = [this.#complementary, this.#monochrome]
        break
      case 3:
        themes = [this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic]
        break
      case 4:
        themes = [this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic]
        break
      default:
        // Represents case 5.
        themes = [this.#analogous, this.#monochrome, this.#splitComplementary, this.#triadic]
        break
    }
    return themes
  }
}
