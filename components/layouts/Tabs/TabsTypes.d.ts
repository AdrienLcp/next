export interface ITabsProps {
  tabs: ITabElement[]
  commonContent?: JSX.Element
}

export interface ITabElement {
  label?: string
  icon?: JSX.Element
  content: JSX.Element
}
