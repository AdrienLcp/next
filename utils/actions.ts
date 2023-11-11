export enum Task {
  Success = 'success',
  Loading = 'loading',
  Error = 'error'
}

export enum ServerError {
  InternalServerError = 'An error occured, please try again later',
  Unauthorized = 'Unauthorized',
  NotFound = 'Not found',
  Forbidden = 'Forbidden',
  BadRequest = 'Bad request'
}

export enum CreateUserError {
  UsernameRequired = 'Username is required',
  PasswordRequired = 'The password is required',
  UsernameTaken = 'This username is already taken',
  InvalidUsername = 'Username must be between 3 and 20 characters long',
  PasswordError = 'Password must be at least 8 characters long & contain at least 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character',
}
