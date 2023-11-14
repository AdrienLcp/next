export const USERNAME_RULES = {
  REGEX: /^\S+$/,
  MIN_LENGTH: 3,
  MAX_LENGTH: 20
} as const

export const isUsernameValid = (username: string) => {
  return USERNAME_RULES.REGEX.test(username)
    && username.length >= USERNAME_RULES.MIN_LENGTH
    && username.length <= USERNAME_RULES.MAX_LENGTH
}
