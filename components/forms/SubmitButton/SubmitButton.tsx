'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button } from '@/components'

type SubmitButtonProps = {
  isDisabled?: boolean
  label?: string
  className?: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled, label, className }) => {
  const { pending } = useFormStatus()

  return (
    <Button
      variant='contained'
      type='submit'
      className={className}
      isDisabled={isDisabled || pending}
    >
      {label}
    </Button>
  )
}
