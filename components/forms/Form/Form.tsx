import { IFormProps } from './FormTypes'
import styles from './FormStyles.module.sass'
import { Button } from '@/components'

export const Form: React.FC<IFormProps> = ({
  title = '',
  submitLabel = '',
  isDisabled = false,
  children = null,
  ...rest
}) => {

  return (
    <form {...rest}>
      <fieldset disabled={isDisabled}>

        {children}

        {submitLabel && (
          <Button>

          </Button>
        )}
      </fieldset>
    </form>
  )
}
