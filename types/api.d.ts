import { CreateUserError, ServerError } from "@/utils"

export type ApiErrorMessage =
  ServerError |
  CreateUserError

export interface IApiError {
  message: ApiErrorMessage
}
