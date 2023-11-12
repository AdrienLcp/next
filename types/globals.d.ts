export type ValueOf<T> = T[keyof T] 

export interface IPageProps<T extends Record<string, string> = never> {
  params: T
  searchParams: Record<string, string | string[] | undefined>
}
