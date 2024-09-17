/**
 * Module for the class ColorTheme.
 */

/**
 * Represents a ColorTheme.
 */
abstract class ColorTheme {
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
   *
   * @param saturationMaxValue - The maximum value saturation can be set to.
   * @param saturationMinValue - The minimum value saturation can be set to.
   * @param hueMaxValue - The maximum value hue can be set to.
   * @param hueMinValue - The minimum value hue can be set to.
   * @param minLightness - The lightness value of the darkest color in the color theme.
   * @param maxLightness - The lightness value of the lightest color in the color theme.
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
   * @param maxValue - The maximum value hue can be set to.
   * @param number - The minimum value hue can be set to.
   * @throws The max value of hue cannot be greater than 360 and cannot be less than min value of hue.
   * @throws The min value of hue cannot be less than 0.
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
   * @param maxValue - The maximum value saturation can be set to.
   * @param minValue - The minimum value saturation can be set to.
   * @throws The max value of saturation cannot be greater than 90 and cannot be less than min value of saturation.
   * @throws The min value of saturation cannot be less than 30.
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
   * @param value - The value to set minLightness to.
   * @throws The value of minLightness must be less than 50 and greater or equal to 20.
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
   * @param value - The value to set maxLightness to.
   * @throws The value of maxLightness must be greater than 50, and less or equal to 80.
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
   * @param max - The maximum value the generated number can be.
   * @param min - The minimum value the generated number can be.
   * @returns The newly generated number.
   */
  #generateRandomNumber (max:number, min:number):number {
    return Math.round(Math.random() * (max - min) + min)
  }

  /**
   * Varies a number by generating a new random number that is inside the given deviation.
   If number was 40 and the deviation was 10, the newly generated number would be between 30 and 50.
   *
   * @param number - The number that is used a refrence for the new number.
   * @param deviation - The value of the deviation to allow.
   * @returns The newly generated number that is inside the deviation.
   */
  protected adjustNumber (number:number, deviation:number): number {
    return this.#generateRandomNumber(number + deviation, number - deviation)
  }

  abstract generateColorTheme (numberOfColors:number): object
}
