import type { I18NStringPaths, ValueOf } from '@/types'
import { API_ERROR_MESSAGES } from '@/utils'

const { SERVER, USER } = API_ERROR_MESSAGES

type ApiErrorMessage =
    ValueOf<typeof SERVER>
  | ValueOf<typeof USER>

const getLocalizedErrorMessage = (message: ApiErrorMessage): I18NStringPaths => {
  switch (message) {
    // User
    case USER.USERNAME_REQUIRED:
      return 'api.errors.user.username-required'
    case USER.INVALID_USERNAME:
      return 'api.errors.user.invalid-username'
    case USER.USERNAME_TAKEN:
      return 'api.errors.user.username-taken'
    
    // Server
    case SERVER.UNAUTHORIZED:
      return 'api.errors.server.unauthorized'
    case SERVER.NOT_FOUND:
      return 'api.errors.server.not-found'
    case SERVER.BAD_REQUEST:
      return 'api.errors.server.bad-request'
    case SERVER.FORBIDDEN:
      return 'api.errors.server.forbidden'
    case SERVER.INTERNAL:
    default:
      return 'api.errors.server.internal'
  }
}
