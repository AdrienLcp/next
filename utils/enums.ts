export enum Device {
  Mobile,
  SmallDevice,
  Tablet,
  Laptop,
  Desktop,
  Large
}

export enum Env {
  Dev,
  Prod
}

export enum Hue {
  // Values need to match with CSS class names in themes.sass file
  Neutral = 'neutral',
  Blue = 'blue',
  Green = 'green',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Yellow = 'yellow'
}

export enum Locale {
  FR = 'fr',
  EN = 'en'
}

export enum LocalStorage {
  Hue = 'hue',
  Locale = 'locale',
  Theme = 'theme'
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system'
}
