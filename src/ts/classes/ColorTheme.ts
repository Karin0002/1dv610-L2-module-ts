/**
 * @file Module for the class ColorTheme.
 * @module src/ts/classes/ColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { ColorThemeData } from "./ColorThemeData.js"
import { ColorValues } from "../enums/ColorValues.js"
import { Guard } from "./Guard.js"
import { Calculator } from "./Calculator.js"

/**
 * Represents a color theme.
 */
export abstract class ColorTheme {
  /**
   * The guard to validate arguments.
   *
   * @type {Guard}
   */
  protected argumentGuard: Guard

  /**
   * The object to use for math calculations.
   *
   * @type {Calculator}
   */
  protected numberCalculator: Calculator

  /**
   * The hue of the color theme.
   *
   * @type {number}
   */
  protected hue: number

  /**
   * The saturation of the color theme.
   */
  protected saturation: number

  /**
   * The lowest allowed lightness.
   *
   * @type {number}
   */
  protected minLightness: number

  /**
   * The highest allowed lightness.
   *
   * @type {number}
   */
  protected maxLightness: number

  /**
   * Creates a new ColorTheme object.
   *
   * @class
   */
  constructor () {
    this.argumentGuard = new Guard()
    this.numberCalculator = new Calculator()
    this.#setHue(ColorValues.HueMax, ColorValues.HueMin)
    this.#setSaturation(ColorValues.SaturationMax, ColorValues.SaturationMin)
    this.#setMaxLightness(ColorValues.MaxLightness)
    this.#setMinLightness(ColorValues.MinLightness)
  }

  /**
   * Sets the hue.
   *
   * @param {number} [maxValue] - The maximum value hue can be set to.
   * @param {number} [minValue] - The minimum value hue can be set to.
   */
  #setHue (maxValue:number, minValue:number) {
    this.hue = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the saturation.
   *
   * @param {number} [maxValue] - The maximum value saturation can be set to.
   * @param {number} [minValue] - The minimum value saturation can be set to.
   */
  #setSaturation (maxValue:number, minValue:number) {
    this.saturation = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the minLightness.
   *
   * @param {number} [value] - The value to set minLightness to.
   */
  #setMinLightness (value:number) {
    this.minLightness = value
  }

  /**
   * Sets the maxLightness.
   *
   * @param {number} [value] - The value to set maxLightness to.
   */
  #setMaxLightness (value:number) {
    this.maxLightness = value
  }

  abstract generateColorTheme (numberOfColors:number): ColorThemeData
}
