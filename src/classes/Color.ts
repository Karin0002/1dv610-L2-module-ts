import { Guard } from './Guard.js'
import { ArgumentLimits } from '../enums/ArgumentLimits.js'

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
    this.#manageHue(hue)
    this.#manageSaturation(saturation)
    this.#manageLightness(lightness)
    this.#setHSL(this.#generateHSL())
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #manageHue (value: number): void {
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      max: ArgumentLimits.HueMax,
      min: ArgumentLimits.HueMin,
      recieved: value
    })

    this.#setHue(value)
  }

  #setHue(value: number): void {
    this.#hue = value
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #manageSaturation (value: number): void {
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      max: ArgumentLimits.SaturationMax,
      min: ArgumentLimits.SaturationMin,
      recieved: value
    })

    this.#setSaturation(value)
  }

  #setSaturation (value: number): void {
    this.#saturation = value
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #manageLightness (value: number): void {
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      max: ArgumentLimits.LightnessMax,
      min: ArgumentLimits.LightnessMin,
      recieved: value
    })

    this.#setLightness(value)
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
