export class MaxMinObject {
  #max: number

  #min: number

  constructor (max: number, min: number) {
    this.#setMax(max)
    this.#setMin(min)
  }

  #setMax (value: number): void {
    this.#max = value
  }

  #setMin (value: number): void {
    this.#min = value
  }

  get max (): number {
    return this.#max
  }

  get min (): number {
    return this.#min
  }
}
