/**
 * @file Module for the class Color.
 * @module src/ts/classes/Color
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */
import { ArgumentLimits } from "../enums/ArgumentLimits.js"
import { Guard } from "./Guard.js"

/**
 * Represents a color.
 */
export class Color {
  /**
   * The guard to validate arguments.
   *
   * @type {Guard}
   */
  #argumentGuard: Guard

  /**
   * The hue of the color.
   *
   * @type {number}
   */
  #hue: number

  /**
   * The saturation of the color.
   */
  #saturation: number

  /**
   * The lightness of the color.
   *
   * @type {number}
   */
  #lightness: number

  /**
   * The hsl string that represents the color.
   *
   * @type {string}
   */
  #hsl: string

  /**
   * Creates a new Color object.
   *
   * @param {number} hue - The hue of the color.
   * @param {number} saturation - The saturation of the color.
   * @param {number} lightness - The lightness of the color.
   * @class
   */
  constructor (hue: number, saturation: number, lightness: number) {
    this.#argumentGuard = new Guard()

    this.#setHue(hue)
    this.#setSaturation(saturation)
    this.#setLightness(lightness)

    this.#setHSL(this.#generateHSLString())
  }

  /**
   * Sets the hue.
   *
   * @param {number} value - The value to set hue to.
   * @throws {Error} The value of hue cannot be greater than 360, nor be less than 0.
   */
  #setHue (value:number) {
    const argumentValues = {
      maxValue: ArgumentLimits.HueMax,
      minValue: ArgumentLimits.HueMin,
      recievedArgument: value
    }
    this.#argumentGuard.validateNumberArgument(argumentValues)

    this.#hue = value
  }

  /**
   * Sets the saturation.
   *
   * @param {number} value - The value to set saturation to.
   * @throws {Error} The value of saturation cannot be greater than 100, nor be less than 0.
   */
  #setSaturation (value:number) {
    const argumentValues = {
      maxValue: ArgumentLimits.SaturationMax,
      minValue: ArgumentLimits.SaturationMin,
      recievedArgument: value
    }
    this.#argumentGuard.validateNumberArgument(argumentValues)

    this.#saturation = value
  }

  /**
   * Sets the lightness.
   *
   * @param {number} value - The value to set lightness to.
   * @throws {Error} The value of lightness cannot be greater than 100, nor be less than 0.
   */
  #setLightness (value:number) {
    const argumentValues = {
      maxValue: ArgumentLimits.LightnessMax,
      minValue: ArgumentLimits.LightnessMin,
      recievedArgument: value
    }
    this.#argumentGuard.validateNumberArgument(argumentValues)

    this.#lightness = value
  }

  /**
   * Sets the hsl.
   *
   * @param {string} value - The value to set hsl to.
   */
  #setHSL (value:string) {
    this.#hsl = value
  }

  /**
   * Generates a HSL string from the fields of the object.
   *
   * @returns {string} A string formatted as a HSL color.
   */
  #generateHSLString (): string {
    return `hsl(${this.#hue}, ${this.#saturation}%, ${this.#lightness}%)`
  }

  /**
   * Gets the hue of the object.
   *
   * @returns {number} The hue.
   */
  get hue ():number {
    return this.#hue
  }
  
  /**
   * Gets the saturation of the object.
   *
   * @returns {number} The saturation.
   */
  get saturation ():number {
    return this.#saturation
  }

  /**
   * Gets the lightness of the object.
   *
   * @returns {number} The lightness.
   */
  get lightness ():number {
    return this.#lightness
  }

  /**
   * Gets the hsl of the object.
   *
   * @returns {string} The hsl.
   */
  get hsl ():string {
    return this.#hsl
  }
}
