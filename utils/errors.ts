import { I18NStringPaths } from '@/types'

export const API_ERROR_MESSAGES = {
  SERVER: {
    INTERNAL_SERVER_ERROR: 'The server encountered a problem. Try again later or contact us',
    UNAUTHORIZED: 'Unauthorized',
    NOT_FOUND: 'Not found',
    FORBIDDEN: 'Forbidden',
    BAD_REQUEST: 'The request is invalid. Try again later or contact us'
  },
  USER: {
    USERNAME_REQUIRED: 'Username is required',
    PASSWORD_REQUIRED: 'Password is required',
    INVALID_USERNAME: 'Username must be between 3 and 20 characters long',
    INVALID_PASSWORD: 'Password must be at least 8 characters long & contain at least 1 number, 1 uppercase letter and 1 lowercase letter'
  },
  PRISMA: {
    USERNAME_TAKEN: 'This username is already taken'

  }
} as const

const { PRISMA, SERVER, USER } = API_ERROR_MESSAGES

type ValueOf<T> = T[keyof T] 
type ApiErrorMessage = ValueOf<typeof SERVER>
  | ValueOf<typeof USER>
  | ValueOf<typeof PRISMA>

export class ApiError extends Error {
  message: ApiErrorMessage
  stringPath: I18NStringPaths

  constructor(message: ApiErrorMessage, stringPath: I18NStringPaths) {
    super(message)
    this.message = message
    this.stringPath = stringPath
  }
}

type ApiErrorResponse = {
  message: ApiErrorMessage
  stringPath: I18NStringPaths
  error: unknown
}

export const getApiError = (error: unknown): ApiErrorResponse => {
  console.error(error)
  const isApiError = error instanceof ApiError

  return {
    message: isApiError ? error.message : SERVER.INTERNAL_SERVER_ERROR,
    stringPath: isApiError ? error.stringPath : 'errors.api.server.internalServerError',
    error
  }
}
