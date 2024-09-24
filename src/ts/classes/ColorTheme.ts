/**
 * Module for the class ColorTheme.
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
   */
  protected argumentGuard: Guard

  /**
   * The object to use for math calculations.
   */
  protected numberCalculator: Calculator

  /**
   * The hue of the color theme.
   */
  protected hue: number

  /**
   * The saturation of the color theme.
   */
  protected saturation: number

  /**
   * The lowest allowed lightness.
   */
  protected minLightness: number

  /**
   * The highest allowed lightness.
   */
  protected maxLightness: number

  /**
   * Creates a new ColorTheme object.
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
   * @param maxValue - The maximum value hue can be set to.
   * @param minValue - The minimum value hue can be set to.
   */
  #setHue (maxValue:number, minValue:number) {
    this.hue = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the saturation.
   *
   * @param maxValue - The maximum value saturation can be set to.
   * @param minValue - The minimum value saturation can be set to.
   */
  #setSaturation (maxValue:number, minValue:number) {
    this.saturation = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the minLightness.
   *
   * @param value - The value to set minLightness to.
   */
  #setMinLightness (value:number) {
    this.minLightness = value
  }

  /**
   * Sets the maxLightness.
   *
   * @param value - The value to set maxLightness to.
   */
  #setMaxLightness (value:number) {
    this.maxLightness = value
  }

  abstract generateColorTheme (numberOfColors:number): ColorThemeData
}
