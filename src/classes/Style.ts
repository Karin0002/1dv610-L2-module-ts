export class Style {
  /**
   * The CSS property that the object represents.
   */
  #property: string
  /**
   * The value of the objects property.
   */
  #value: string

  constructor (property: string, value: string) {
    this.#setProperty(property)
    this.#setValue(value)
  }

  #setProperty (property: string): void {
    this.#property = property
  }

  #setValue (value: string): void {
    this.#value = value
  }

  /**
   * The string that represents a CSS property.
   *
   * @returns The property.
   */
  get property (): string {
    return this.#property
  }

  /**
   * The string that represents the value of the CSS property.
   *
   * @returns The value.
   */
  get value (): string {
    return this.#value
  }

  /**
   * The string that represents the complete CSS declaration with property and value.
   */
  get declaration (): string {
    return `${this.#property}: ${this.value};`
  }
}
