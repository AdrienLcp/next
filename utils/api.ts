// Errors must have a correct path to locales .json
// They are used in API to send the right error, and display it on the user locale

export enum ServerError {
  InternalServerError = 'errors.api.common.internal'
}

export enum CreateUserError {
  UsernameRequired = 'errors.api.user.usernameRequired',
  UsernameTaken = 'errors.api.user.usernameTaken',
  PasswordError = 'errors.api.user.passwordError',
  PasswordRequired = 'errors.api.user.passwordRequired'
}
