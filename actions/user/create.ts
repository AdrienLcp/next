import { ServerError, CreateUserError, isPasswordValid, isUsernameValid } from '@/utils'

type CreateUserRequest = {
  username: string
  password: string
}

type CreateUserResponse = {
  username: string
  password: string
}

export const createUser = async (request: CreateUserRequest): Promise<CreateUserResponse> => {
  try {
    const { username, password } = request

    //! check session user

    if (!username) {
      throw new Error(CreateUserError.UsernameRequired)
    }

    if (!password) {
      throw new Error(CreateUserError.PasswordRequired)
    }

    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new Error(ServerError.BadRequest)
    }

    if (!isUsernameValid(username)) {
      throw new Error(CreateUserError.InvalidUsername)
    }

    if (!isPasswordValid(password)) {
      throw new Error(CreateUserError.PasswordError)
    }
 
    // TODO : await db.prisma.user.create()

    // if user taken
    // throw new Error(CreateUserError.UsernameTaken)
    //

    return {
      username,
      password
    }
  } catch (error) {
    console.error(error)
    throw new Error(ServerError.InternalServerError)
  }
}
