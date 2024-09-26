/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/**
 * The limitation on arguments for the methods generateColorTheme.
 */
export enum ArgumentLimits {
  AnalogousMax = 5,
  AnalogousMin = 3,
  ComplementaryMax = 4,
  ComplementaryMin = 2,
  MonochromeMax = 5,
  MonochromeMin = 2,
  SplitComplementaryMax = 5,
  SplitComplementaryMin = 3,
  TriadicMax = 5,
  TriadicMin = 3,
  RandomColorThemeMax = 5,
  RandomColorThemeMin = 2,
  HueMax = 360,
  HueMin = 0,
  SaturationMax = 100,
  SaturationMin = 0,
  LightnessMax = 100,
  LightnessMin = 0
}
