export interface IContextMenuProps {
  actions: IContextMenuAction[]
}

export interface IContextMenuAction {
  onClick: () => void
  icon?: JSX.Element
  label?: string
  ariaLabel?: string
}
