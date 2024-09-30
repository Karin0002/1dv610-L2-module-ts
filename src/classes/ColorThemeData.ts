import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'
import { Guard } from './Guard.js'

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

  /**
   * Creates a new Color object.
   *
   * @param colorTheme - The name of the colorTheme.
   * @param colors - The colors in the theme.
   */
  constructor (colorTheme: ColorThemes, colors: Color[]) {
    this.#argumentGuard = new Guard()
    this.#setColorTheme(colorTheme)
    this.#setColorsInTheme(colors)
    this.#setNumberOfColorsInTheme()
  }

  #setColorTheme (theme: ColorThemes): void {
    // Mixed abstraction levels.
    // Low-level: variables.
    // High-level: calls method.
    this.#argumentGuard.validateColorThemesArgument(theme)

    this.#colorTheme = theme
  }

  #setColorsInTheme (colors: Color[]): void {
    // Mixed abstraction levels.
    // Low-level: variables.
    // High-level: calls method.
    this.#argumentGuard.validateColorArrayArgument(colors)

    this.#colorsInTheme = colors
  }

  #setNumberOfColorsInTheme (): void {
    this.#numberOfColorsInTheme = this.#colorsInTheme.length
  }

  get colorsInTheme (): Color[] {
    // Mixed abstraction levels.
    // Low-level: array.push, loop.
    // High-level: initiates objects.
    // Copies the colors since they are refrence types.
    const copyOfColors = []
    for (const color of this.#colorsInTheme) {
      const copyOfColor = new Color(color.hue, color.saturation, color.lightness)
      copyOfColors.push(copyOfColor)
    }

    return copyOfColors
  }

  get colorTheme (): ColorThemes {
    return this.#colorTheme
  }

  get numberOfColorsInTheme (): number {
    return this.#numberOfColorsInTheme
  }

  /**
   * Sorts the colors by hue in ascending order.
   */
  sortColorsByHue (): void {
    // Does not return colors because of command query separation.
    this.#colorsInTheme.sort((a, b) => a.hue - b.hue)
  }

  /**
   * Sorts the colors by saturation in ascending order.
   */
  sortColorsBySaturation (): void {
    // Does not return colors because of command query separation.
    this.#colorsInTheme.sort((a, b) => a.saturation - b.saturation)
  }

  /**
   * Sorts the colors by lightness in ascending order.
   */
  sortColorsByLightness (): void {
    // Does not return colors because of command query separation.
    this.#colorsInTheme.sort((a, b) => a.lightness - b.lightness)
  }
}
