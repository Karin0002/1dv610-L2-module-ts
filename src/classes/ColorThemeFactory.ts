import { ColorThemeData } from './ColorThemeData.js'
import { ColorValues } from '../enums/ColorValues.js'
import { MaxMinObject } from './MaxMinObject.js'
import { NumberGenerator } from './NumberGenerator.js'
import { Validator } from './Validator.js'

export abstract class ColorThemeFactory {
  protected validator: Validator

  /**
   * The object to use for adjusting values and generating random numbers.
   */
  protected generator: NumberGenerator

  protected hue: number
  protected saturation: number
  protected minLightness: number
  protected maxLightness: number

  constructor () {
    this.validator = new Validator()
    this.generator = new NumberGenerator()
    this.setHue(new MaxMinObject(ColorValues.HueMax, ColorValues.HueMin))
    this.#setSaturation(new MaxMinObject(ColorValues.SaturationMax, ColorValues.SaturationMin))
    this.#setMinLightness(ColorValues.MinLightness)
    this.#setMaxLightness(ColorValues.MaxLightness)
  }

  abstract getColorTheme (numberOfColors: number): ColorThemeData

  /**
   * Sets the hue with a randomly generated number that is between the arguments.
   */
  protected setHue (limits: MaxMinObject): void {
    this.hue = this.generator.generateRandomNumber(limits)
  }

  /**
   * Sets the saturation with a randomly generated number that is between the arguments.
   */
  #setSaturation (limits: MaxMinObject): void {
    this.saturation = this.generator.generateRandomNumber(limits)
  }

  #setMinLightness (value: number): void {
    this.minLightness = value
  }

  #setMaxLightness (value: number): void {
    this.maxLightness = value
  }
}
