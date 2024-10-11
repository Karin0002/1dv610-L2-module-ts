import { Guard } from './Guard.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ValidationObject } from './ValidationObject.js'

export class Color {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  #hue: number

  #saturation: number

  #lightness: number

  #hsl: string

  constructor (hue: number, saturation: number, lightness: number) {
    this.#argumentGuard = new Guard()
    this.#validateHue(hue)
    this.#setHue(hue)
    this.#validateSaturation(saturation)
    this.#setSaturation(saturation)
    this.#validateLightness(lightness)
    this.#setLightness(lightness)
    this.#setHSL(this.#generateHSL())
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #validateHue (value: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.HueMax,
      ArgumentLimits.HueMin,
      value
    )
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #setHue(value: number): void {
    this.#hue = value
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #validateSaturation (value: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.SaturationMax,
      ArgumentLimits.SaturationMin,
      value
    )
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #setSaturation (value: number): void {
    this.#saturation = value
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #validateLightness (value: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.LightnessMax,
      ArgumentLimits.LightnessMin,
      value
    )
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #setLightness(value: number): void {
    this.#lightness = value
  }

  #setHSL (value: string): void {
    this.#hsl = value
  }

  /**
   * Generates a HSL string from the fields of the object.
   *
   * @returns A string formatted as a HSL color.
   */
  #generateHSL (): string {
    return `hsl(${this.#hue}, ${this.#saturation}%, ${this.#lightness}%)`
  }

  /**
   * The hue of the color.
   *
   * @returns Hue.
   */
  get hue (): number {
    return this.#hue
  }

  /**
   * The saturation of the color.
   *
   * @returns Saturation.
   */
  get saturation (): number {
    return this.#saturation
  }

  /**
   * The lightness of the color.
   *
   * @returns Lightness.
   */
  get lightness (): number {
    return this.#lightness
  }

  /**
   * The hsl of the color.
   *
   * @returns HSL.
   */
  get hsl (): string {
    return this.#hsl
  }
}
