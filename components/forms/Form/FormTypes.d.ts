type OmittedFormProps = ''
type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, OmittedFormProps>

export interface IFormProps extends FormProps extends React.PropsWithChildren {
  title?: string
  submitLabel?: string
  isDisabled?: boolean
}
