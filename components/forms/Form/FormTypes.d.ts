type OmittedFormProps = ''
type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, OmittedFormProps>

export interface IFormProps extends FormProps extends React.PropsWithChildren {
  onSubmit: (event: React.FormEvent) => void
  status?: IFormStatus
  title?: string
  submitLabel?: string
  isDisabled?: boolean
  formClassName?: string
  fieldsClassName?: string
}

export interface IFormStatus {
  type: 'error' | 'warning' | 'success'
  message: string
}
