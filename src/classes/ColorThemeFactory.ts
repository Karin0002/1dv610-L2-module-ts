import { ColorThemeData } from './ColorThemeData.js'

export abstract class ColorThemeFactory {
  abstract getColorTheme (numberOfColors: number): ColorThemeData
  // SHOULD THE MULTIHUECOLORTHEMEMAKER/COLORTHEMEMAKER LOGIC BE HERE???
  // WHERE AND HOW IS IT SUPPOSED TO BE PASSED AS AN ARGUMENT TO WHAT???
  // THE PURPOSE IS TO NOT HAVE A HARDCODED NEW COLORTHEMEDATA INSIDE THE COLORTHEMEMAKERS METHODS???
}
