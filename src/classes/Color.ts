import { ArgumentLimits } from '../enums/ArgumentLimits.js'
import { Guard } from './Guard.js'

export class Color {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  #hue: number

  #saturation: number

  #lightness: number

  #hsl: string

  // Triads, three arguments which is often to many but in this case I made
  // the decision to accept it since it is a constructor.
  constructor (hue: number, saturation: number, lightness: number) {
    this.#argumentGuard = new Guard()

    this.#setHue(hue)
    this.#setSaturation(saturation)
    this.#setLightness(lightness)

    this.#setHSL(this.#generateHSLString())
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #setHue (value: number): void {
    // Mixed abstraction level.
    // Low-level: variables.
    // High-level: calling validation method.
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      maxValue: ArgumentLimits.HueMax,
      minValue: ArgumentLimits.HueMin,
      recievedArgument: value
    })

    this.#hue = value
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #setSaturation (value: number): void {
    // Mixed abstraction level.
    // Low-level: variables.
    // High-level: calling validation method.
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      maxValue: ArgumentLimits.SaturationMax,
      minValue: ArgumentLimits.SaturationMin,
      recievedArgument: value
    })

    this.#saturation = value
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #setLightness (value: number): void {
    // Mixed abstraction level.
    // Low-level: variables.
    // High-level: calling validation method.
    this.#argumentGuard.validateNumberArgumentWithMaxAndMin({
      maxValue: ArgumentLimits.LightnessMax,
      minValue: ArgumentLimits.LightnessMin,
      recievedArgument: value
    })

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
  #generateHSLString (): string {
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
