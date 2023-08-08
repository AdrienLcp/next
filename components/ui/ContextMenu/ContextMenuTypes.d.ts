export interface IContextMenuProps {
  actions: IContextMenuAction[]
}

export interface IContextMenuAction {
  onClick: () => void
  label?: string
  icon?: JSX.Element
}
