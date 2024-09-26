import { ColorThemes } from '../enums/ColorThemes.js'
import { Color } from './Color.js'

export class ColorThemeData {
  /**
   * The name of the color theme.
   */
  #colorTheme: ColorThemes

  #numberOfColorsInTheme: number

  #colorsInTheme: Color[]

  /**
   * Creates a new Color object.
   *
   * @param numberOfColors - The number of colors in the theme.
   * @param colorTheme - The name of the colorTheme.
   * @param colors - The colors in the theme.
   */
  // Triads, three arguments which is often to many but in this case I made
  // the decision to accept it since it is a constructor.
  constructor (numberOfColors: number, colorTheme: ColorThemes, colors: Color[]) {
    this.#numberOfColorsInTheme = numberOfColors
    this.#colorTheme = colorTheme
    this.#colorsInTheme = colors
  }

  get numberOfColorsInTheme (): number {
    return this.#numberOfColorsInTheme
  }

  get colorTheme (): ColorThemes {
    return this.#colorTheme
  }

  get colorsInTheme (): Color[] {
    // Mixed abstraction levels.
    // Low-level: array.push.
    // High-level: initiates objects.
    // Copies the colors since they are refrence types.
    const copyOfColors = []
    for (const color of this.#colorsInTheme) {
      const copyOfColor = new Color(color.hue, color.saturation, color.lightness)
      copyOfColors.push(copyOfColor)
    }

    return copyOfColors
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
