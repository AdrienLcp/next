export enum Device {
  Mobile = 'Mobile',
  SmallDevice = 'Small device',
  Tablet = 'Tablet',
  Laptop = 'Laptopt',
  Desktop = 'Desktop',
  Large = 'Large'
}

export enum Env {
  Dev,
  Prod
}

export enum Hue {
  // Values need to match with CSS class names in themes.sass file
  Neutral = 'Neutral',
  Blue = 'Blue',
  Green = 'Green',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Red = 'Red',
  Yellow = 'Yellow'
}

export enum Locale {
  FR = 'fr',
  EN = 'en'
}

export enum LocalStorage {
  Hue = 'Hue',
  Locale = 'Locale',
  Theme = 'Theme'
}

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
  System = 'System'
}
