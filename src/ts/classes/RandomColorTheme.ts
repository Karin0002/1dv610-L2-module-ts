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
