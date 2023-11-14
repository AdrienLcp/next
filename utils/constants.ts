// This const needs match with css class names in @/styles/colors.sass file
export const HUES = ['neutral', 'blue', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'] as const

export const THEMES = ['dark', 'light', 'system'] as const

export const LOCAL_STORAGE_KEYS = ['hue', 'locale', 'theme', 'token'] as const

export const API_ERROR_MESSAGES = {
  SERVER: {
    INTERNAL: 'The server encountered a problem. Try again later or contact us',
    UNAUTHORIZED: 'You need to be authenticated to perform this action',
    NOT_FOUND: 'The resource you are looking for does not exist',
    FORBIDDEN: 'You don\'t have permission to perform this action',
    BAD_REQUEST: 'The request is invalid. Try again later or contact us'
  },
  USER: {
    USERNAME_REQUIRED: 'Username is required',
    INVALID_USERNAME: 'Username must be between 3 and 20 characters long',
    USERNAME_TAKEN: 'This username is already taken'
  }
} as const

export const API_SUCCESS_MESSAGES = {
  SERVER: {
    SUCCESS: 'Success',
    CREATED: 'Created',
    UPDATED: 'Updated'
  },
  USER: {
    CREATED: 'User created',
    UPDATED: 'User updated',
    DELETED: 'User deleted'
  }
} as const
