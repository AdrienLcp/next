declare interface IPolyglotOptions {
  phrases: { [key: string]: string }
  locale?: string
}

declare class Polyglot {
  constructor (options: IPolyglotOptions);
  t(key:string, options?: { [key: string]: any }):string
}

export = Polyglot
export = IPolyglotOptions
