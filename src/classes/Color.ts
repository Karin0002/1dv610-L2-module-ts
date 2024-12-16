import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { ValidationObject } from './ValidationObject.js'
import { Validator } from './Validator.js'

export class Color {
  #validator: Validator

  #hue: number
  #saturation: number
  #lightness: number
  #hsl: string

  constructor (hue: number, saturation: number, lightness: number) {
    this.#validator = new Validator()
    this.#validateHue(hue)
    this.#setHue(hue)
    this.#validateSaturation(saturation)
    this.#setSaturation(saturation)
    this.#validateLightness(lightness)
    this.#setLightness(lightness)
    this.#setHSL(this.#generateHSL())
  }

  #validateHue (value: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.HueMax,
      ArgumentLimits.HueMin,
      value
    )
    this.#validator.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #setHue (value: number): void {
    this.#hue = value
  }

  #validateSaturation (value: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.SaturationMax,
      ArgumentLimits.SaturationMin,
      value
    )
    this.#validator.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #setSaturation (value: number): void {
    this.#saturation = value
  }

  #validateLightness (value: number): void {
    const validationValues = new ValidationObject(
      ArgumentLimits.LightnessMax,
      ArgumentLimits.LightnessMin,
      value
    )
    this.#validator.validateNumberArgumentWithMaxAndMin(validationValues)
  }

  #setLightness (value: number): void {
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

  get hue (): number {
    return this.#hue
  }

  get saturation (): number {
    return this.#saturation
  }

  get lightness (): number {
    return this.#lightness
  }

  get hsl (): string {
    return this.#hsl
  }
}
