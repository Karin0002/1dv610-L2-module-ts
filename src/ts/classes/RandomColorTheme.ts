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

/**
 * Represents a random color theme.
 */
export class RandomColorTheme {
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
    this.#analogous = new Analogous()
    this.#complementary = new Complementary()
    this.#monochrome = new Monochrome()
    this.#splitComplementary = new SplitComplementary()
    this.#triadic = new Triadic()
  }

  generateColorTheme (numberOfColors?:number): ColorThemeData {
    // NOTES, MAYBE EVERY COLORTHEME SHOULD HAVE A GETTER THAT GETS WHAT ARGUMENTS GENERATECOLORTHEME CAN TAKE
    // 1. Check if number of colors is not undefined
    // 2a. If true:
    // 3. getThemeWith5Colors
    // 4. Pick random element from array
    // 5. Choose random number that is within the limits of the themes argument
    // 6. Call generateColorTheme() with the number
    // 7. Return ColorThemeData

    // 2b. If false:
    // 3. getThemeWithXColors() X should be the numberOfColors
    // 4. Pick random element from array
    // 5. Call generateColorTheme() with the numberOfColors
    // 6. Return ColorThemeData

    // Random:
    // Pick random number
    // getThemesWithNColors(randomNumber)
    // Pick random element form array
    // generateColorTheme(randomNumber)

    // Specific numberOfColors:
    // getThemesWithNColors(numberOfColors)
    // Pick random element from array
    // generateColorTheme(numberOfColors)
  }

  #getThemesWithNColors (numberOfColors:number): ColorTheme[] {
    // Breaks open/close rule.
    let themes
    switch (numberOfColors) {
      case 2:
        themes = [this.#complementary, this.#monochrome]
        break
      case 3:
        themes = [this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic]
        break
      case 4:
        themes = [this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic]
        break
      case 5:
        themes = [this.#analogous, this.#monochrome, this.#splitComplementary, this.#triadic]
        break
      default:
        throw new Error('The number of colors must be between 2 and 5.')
    }
    return themes
  }

  #getThemesWith2Colors ():ColorTheme[] {
    // Breaks open/close rule.
    const themes = [this.#complementary, this.#monochrome]
    return themes
  }
  #getThemesWith3or4Colors ():ColorTheme[] {
    // Breaks open/close rule.
    const themes = [this.#analogous, this.#complementary, this.#monochrome, this.#splitComplementary, this.#triadic]   
    return themes 
  }
  #getThemesWith5Colors ():ColorTheme[] {
    // Breaks open/close rule.
    const themes = [this.#analogous, this.#monochrome, this.#splitComplementary, this.#triadic]  
    return themes
  }
}
