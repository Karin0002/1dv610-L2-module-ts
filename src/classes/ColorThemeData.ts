import { Color } from './Color.js'
import { ColorThemes } from '../enums/ColorThemes.js'
import { Validator } from './Validator.js'

export class ColorThemeData {
  #validator: Validator

  /**
   * The name of the color theme.
   */
  #colorTheme: ColorThemes
  #colorsInTheme: Color[]
  #numberOfColorsInTheme: number

  constructor (colorTheme: ColorThemes, colors: Color[]) {
    this.#validator = new Validator()
    this.#validateColorTheme(colorTheme)
    this.#setColorTheme(colorTheme)
    this.#validateColorsInTheme(colors)
    this.#setColorsInTheme(colors)
    this.#setNumberOfColorsInTheme()
  }

  #validateColorTheme (theme: ColorThemes): void {
    this.#validator.validateColorThemesArgument(theme)
  }

  #setColorTheme (theme: ColorThemes): void {
    this.#colorTheme = theme
  }

  #validateColorsInTheme (colors: Color[]): void {
    this.#validator.validateColorArrayArgument(colors)
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
   * @returns An array of the colors.
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
   */
  get colorTheme (): ColorThemes {
    return this.#colorTheme
  }

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
