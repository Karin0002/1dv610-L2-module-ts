export class ValidationObject {
  #max: number

  #min: number
  
  #recieved: number

  constructor (max: number, min: number, recieved: number) {
    this.#setMax(max)
    this.#setMin(min)
    this.#setRecieved(recieved)
  }

  #setMax(value: number): void {
    this.#max = value
  }

  #setMin (value: number): void {
    this.#min = value
  }

  #setRecieved (value: number): void {
    this.#recieved = value
  }

  get max (): number {
    return this.#max
  }

  get min (): number {
    return this.#min
  }

  get recieved (): number {
    return this.#recieved
  }
}
