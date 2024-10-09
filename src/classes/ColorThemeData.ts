import { ColorThemes } from '../enums/ColorThemes.js'
import { Guard } from './Guard.js'
import { Color } from './Color.js'

export class ColorThemeData {
  /**
   * The object to validate arguments with.
   */
  #argumentGuard: Guard

  #colorsInTheme: Color[]

  /**
   * The name of the color theme.
   */
  #colorTheme: ColorThemes

  #numberOfColorsInTheme: number

  constructor (colorTheme: ColorThemes, colors: Color[]) {
    this.#argumentGuard = new Guard()
    this.#manageColorTheme(colorTheme)
    this.#manageColorsInTheme(colors)
    this.#setNumberOfColorsInTheme()
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #manageColorTheme (theme: ColorThemes): void {
    this.#argumentGuard.validateColorThemesArgument(theme)

    this.#setColorTheme(theme)
  }

  #setColorTheme (theme: ColorThemes): void {
    this.#colorTheme = theme
  }

  /**
   * @throws Error if the arguments does not pass the validation.
   */
  #manageColorsInTheme (colors: Color[]): void {
    this.#argumentGuard.validateColorArrayArgument(colors)

    this.#setColorsInTheme(colors)
  }

  #setColorsInTheme (colors: Color[]): void {
    this.#colorsInTheme = colors
  }

  #setNumberOfColorsInTheme (): void {
    this.#numberOfColorsInTheme = this.#colorsInTheme.length
  }

  /**
   * The colors in the theme.
   *
   * @returns A deep copied array of the colors.
   */
  get colorsInTheme (): Color[] {
    // Copies the colors since they are refrence types.
    const copyOfColors = []
    for (const color of this.#colorsInTheme) {
      copyOfColors.push(this.#copyColor(color))
    }

    return copyOfColors
  }

  #copyColor (color: Color): Color {
    return new Color(color.hue, color.saturation, color.lightness)
  }

  /**
   * The name of the theme.
   *
   * @returns The name.
   */
  get colorTheme (): ColorThemes {
    return this.#colorTheme
  }

  /**
   * The number of colors in the theme.
   *
   * @returns The number of colors.
   */
  get numberOfColorsInTheme (): number {
    return this.#numberOfColorsInTheme
  }

  /**
   * Sorts the colors in the theme by hue in ascending order.
   */
  sortColorsByHue (): void {
    this.#colorsInTheme.sort((a, b) => a.hue - b.hue)
  }

  /**
   * Sorts the colors in the theme by saturation in ascending order.
   */
  sortColorsBySaturation (): void {
    this.#colorsInTheme.sort((a, b) => a.saturation - b.saturation)
  }

  /**
   * Sorts the colors in the theme by lightness in ascending order.
   */
  sortColorsByLightness (): void {
    this.#colorsInTheme.sort((a, b) => a.lightness - b.lightness)
  }
}
