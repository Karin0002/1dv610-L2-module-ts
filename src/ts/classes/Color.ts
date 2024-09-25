/**
 * Module for the class Color.
 */
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { Guard } from './Guard.js'

/**
 * Represents a color.
 */
export class Color {
  /**
   * The guard to validate arguments.
   */
  #argumentGuard: Guard

  /**
   * The hue of the color.
   */
  #hue: number

  /**
   * The saturation of the color.
   */
  #saturation: number

  /**
   * The lightness of the color.
   */
  #lightness: number

  /**
   * The hsl string that represents the color.
   */
  #hsl: string

  /**
   * Creates a new Color object.
   *
   * @param hue - The hue of the color.
   * @param saturation - The saturation of the color.
   * @param lightness - The lightness of the color.
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
   * @param value - The value to set hue to.
   */
  #setHue (value: number): void {
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
   * @param value - The value to set saturation to.
   * @throws Error if the arguments does not pass the validation.
   */
  #setSaturation (value: number): void {
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
   * @param value - The value to set lightness to.
   * @throws Error if the arguments does not pass the validation.
   */
  #setLightness (value: number): void {
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
   * @param value - The value to set hsl to.
   */
  #setHSL (value: string): void {
    this.#hsl = value
  }

  /**
   * Generates a HSL string from the fields of the object.
   *
   * @returns A string formatted as a HSL color.
   */
  #generateHSLString (): string {
    return `hsl(${this.#hue}, ${this.#saturation}%, ${this.#lightness}%)`
  }

  /**
   * Gets the hue of the object.
   *
   * @returns The hue.
   */
  get hue (): number {
    return this.#hue
  }

  /**
   * Gets the saturation of the object.
   *
   * @returns The saturation.
   */
  get saturation (): number {
    return this.#saturation
  }

  /**
   * Gets the lightness of the object.
   *
   * @returns The lightness.
   */
  get lightness (): number {
    return this.#lightness
  }

  /**
   * Gets the hsl of the object.
   *
   * @returns The hsl.
   */
  get hsl (): string {
    return this.#hsl
  }
}
