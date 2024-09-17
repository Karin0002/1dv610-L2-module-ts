/**
 * @file Module for the class MultiHueColorTheme.
 * @module src/ts/classes/MultiHueColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorTheme } from "./ColorTheme.js"

/**
 * Represents a multi hue color theme.
 */
export abstract class MultiHueColorTheme extends ColorTheme {
  /**
   * The hues of the color theme.
   *
   * @type {number[]}
   */
  protected hues: number[]

  /**
   * Picks a random hue from an array.
   *
   * @param {number[]} hues - An array of numbers representing hues.
   * @returns {number} The hue that was picked.
   */
  protected pickRandomHue (hues: number[]): number {
    // Random index between 0, the first index, and hues.length - 1, the last index.
    const randomIndex = this.generateRandomNumber(hues.length - 1, 0)
    return hues[randomIndex]
  }

}
