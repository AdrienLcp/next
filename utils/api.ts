export const PASSWORD_RULES = {
  REGEX: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
  MIN_LENGTH: 8
} as const

export const USERNAME_RULES = {
  REGEX: /^\S+$/,
  MIN_LENGTH: 3,
  MAX_LENGTH: 20
} as const

export const isPasswordValid = (password: string) => {
  return PASSWORD_RULES.REGEX.test(password)
    && password.length >= PASSWORD_RULES.MIN_LENGTH
}

export const isUsernameValid = (username: string) => {
  return USERNAME_RULES.REGEX.test(username)
    && username.length >= USERNAME_RULES.MIN_LENGTH
    && username.length <= USERNAME_RULES.MAX_LENGTH
}
