/**
 * @file Module for the class ColorTheme.
 * @module src/ts/classes/ColorTheme
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a ColorTheme.
 */
abstract class ColorTheme {
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
   * @param {number} [saturationMaxValue=90] - The maximum value saturation can be set to.
   * @param {number} [saturationMinValue=30] - The minimum value saturation can be set to.
   * @param {number} [hueMaxValue=360] - The maximum value hue can be set to.
   * @param {number} [hueMinValue=0] - The minimum value hue can be set to.
   * @param {number} [minLightness=20] - The lightness value of the darkest color in the color theme.
   * @param {number} [maxLightness=80] - The lightness value of the lightest color in the color theme.
   * @class
   */
  constructor (saturationMaxValue:number = 90, saturationMinValue:number = 30, hueMaxValue:number = 360, hueMinValue:number = 0,maxLightness:number = 80, minLightness:number = 20) {
    this.#setHue(hueMaxValue, hueMinValue)
    this.#setSaturation(saturationMaxValue, saturationMinValue)
    this.#setMaxLightness(maxLightness)
    this.#setMinLightness(minLightness)
  }

  /**
   * Sets the hue.
   *
   * @param {number} [maxValue] - The maximum value hue can be set to.
   * @param {number} [minValue] - The minimum value hue can be set to.
   * @throws {Error} The max value of hue cannot be greater than 360 and cannot be less than min value of hue.
   * @throws {Error} The min value of hue cannot be less than 0.
   */
  #setHue (maxValue:number, minValue:number) {
    let error
    if (maxValue > 360 || maxValue < minValue) {
      error = new Error('The max value of hue cannot be greater than 360 and cannot be less than min value of hue.')
    } else if (minValue < 0) {
      error = new Error('The min value of hue cannot be less than 0.')
    }
    if (error) {
      // error.status = 400
      throw error
    }
    this.hue = this.#generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the saturation.
   *
   * @param {number} [maxValue] - The maximum value saturation can be set to.
   * @param {number} [minValue] - The minimum value saturation can be set to.
   * @throws {Error} The max value of saturation cannot be greater than 90 and cannot be less than min value of saturation.
   * @throws {Error} The min value of saturation cannot be less than 30.
   */
  #setSaturation (maxValue:number, minValue:number) {
    let error
    if (maxValue > 90 || maxValue < minValue) {
      error = new Error('The max value of saturation cannot be greater than 90 and cannot be less than min value of saturation.')
    } else if (minValue < 30) {
      error = new Error('The min value of saturation cannot be less than 30.')
    }
    if (error) {
      // error.status = 400
      throw error
    }

    this.saturation = this.#generateRandomNumber(maxValue, minValue)
  }

  /**
   * Sets the minLightness.
   *
   * @param {number} [value] - The value to set minLightness to.
   * @throws {Error} The value of minLightness must be less than 50 and greater or equal to 20.
   */
  #setMinLightness (value:number) {
    let error
    if (value < 20 || value >= 50) {
      error = new Error('The value of minLightness must be less than 50 and greater or equal to 20.')
    }
    if (error) {
      // error.status = 400
      throw error
    }

    this.minLightness = value
  }

  /**
   * Sets the maxLightness.
   *
   * @param {number} [value] - The value to set maxLightness to.
   * @throws {Error} The value of maxLightness must be greater than 50, and less or equal to 80.
   */
  #setMaxLightness (value:number) {
    let error
    if (value > 80 || value <= 50) {
      error = new Error('The value of maxLightness must be greater than 50, and less or equal to 80.')
    }
    if (error) {
      // error.status = 400
      throw error
    }

    this.maxLightness = value
  }

  /**
   * Generates a random number between the given arguments.
   *
   * @param {number} max - The maximum value the generated number can be.
   * @param {number} min - The minimum value the generated number can be.
   * @returns {number} The newly generated number.
   */
  #generateRandomNumber (max:number, min:number): number {
    return Math.round(Math.random() * (max - min) + min)
  }

  /**
   * Varies a number by generating a new random number that is inside the given deviation.
   If number was 40 and the deviation was 10, the newly generated number would be between 30 and 50.
   *
   * @param {number} number - The number that is used a refrence for the new number.
   * @param {number} deviation - The value of the deviation to allow.
   * @returns {number} The newly generated number that is inside the deviation.
   */
  protected adjustNumber (number:number, deviation:number): number {
    return this.#generateRandomNumber(number + deviation, number - deviation)
  }

  abstract generateColorTheme (numberOfColors:number): object
}
