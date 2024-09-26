import { ColorThemeData } from './ColorThemeData.js'
import { ColorValues } from '../enums/ColorValues.js'
import { Guard } from './Guard.js'
import { Calculator } from './Calculator.js'

export abstract class ColorTheme {
  /**
   * The object to validate arguments with.
   */
  protected argumentGuard: Guard

  /**
   * The object to use for adjusting values and generating random numbers.
   */
  protected numberCalculator: Calculator

  protected hue: number

  protected saturation: number

  protected minLightness: number

  protected maxLightness: number

  // Instead of accepting arguments I uses enums to make the color themes be cohesive.
  // The cons is that it is less versatile.
  constructor () {
    this.argumentGuard = new Guard()
    this.numberCalculator = new Calculator()
    this.#setHue(ColorValues.HueMax, ColorValues.HueMin)
    this.#setSaturation(ColorValues.SaturationMax, ColorValues.SaturationMin)
    this.#setMinLightness(ColorValues.MinLightness)
    this.#setMaxLightness(ColorValues.MaxLightness)
  }

  /**
   * Sets the hue with a randomly generated number that is between the arguments.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  #setHue (maxValue: number, minValue: number): void {
    this.hue = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the saturation with a randomly generated number that is between the arguments.
   */
  // Dyadic, two arguments, could perhaps be an object instead
  // with the current arguments as properties.
  #setSaturation (maxValue: number, minValue: number): void {
    this.saturation = this.numberCalculator.generateRandomNumber(maxValue, minValue)
  }

  #setMinLightness (value: number): void {
    this.minLightness = value
  }

  #setMaxLightness (value: number): void {
    this.maxLightness = value
  }

  abstract generateColorTheme (numberOfColors: number): ColorThemeData
}
