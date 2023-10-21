import type { IFormProps } from './FormTypes'
import styles from './FormStyles.module.sass'

import { Button } from '@/components'

export const Form: React.FC<IFormProps> = ({
  onSubmit,
  status = null,
  title = '',
  submitLabel = '',
  formClassName = '',
  fieldsClassName = '',
  isDisabled = false,
  children = null,
  ...rest
}) => (
  <form
    onSubmit={onSubmit}
    className={`${styles.form} ${formClassName}`}
    {...rest}
  >
    {title && (
      <h2 className={styles.title}>
        {title}
      </h2>
    )}
    
    {status && (
      <div>
        
      </div>
    )}

    <fieldset
      className={`${styles.controls} ${fieldsClassName}`}
      disabled={isDisabled}
    >
      {children}

      {submitLabel && (
        <Button
          variant='contained'
          type='submit'
          className={styles.submit}
        >
          {submitLabel}
        </Button>
      )}
    </fieldset>
  </form>
)
