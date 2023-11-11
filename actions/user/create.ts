import { API_ERROR_MESSAGES, ApiError, isPasswordValid, isUsernameValid } from '@/utils'

type CreateUserRequest = {
  username: string
  password: string
}

type CreateUserResponse = {
  username: string
}

const { SERVER, USER } = API_ERROR_MESSAGES

export const createUser = async (request: CreateUserRequest): Promise<CreateUserResponse> => {
  try {
    const { username, password } = request

    if (!username) {
      throw new ApiError(USER.USERNAME_REQUIRED, 'errors.api.user.usernameRequired')
    }

    if (!password) {
      throw new ApiError(USER.PASSWORD_REQUIRED, 'errors.api.user.passwordRequired')
    }

    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new ApiError(SERVER.BAD_REQUEST, 'errors.api.server.badRequest')
    }

    if (!isUsernameValid(username)) {
      throw new ApiError(USER.INVALID_USERNAME, 'errors.api.user.invalidUsername')
    }

    if (!isPasswordValid(password)) {
      throw new ApiError(USER.INVALID_PASSWORD, 'errors.api.user.invalidPassword')
    }
 
    // TODO : const user = await db.prisma.user.create({ data: { username, password } }})

    return { username }
  } catch (error) {
    console.error(error)

    // if (error instanceof Prisma.PrismaClientKnownRequestError) {
    //   if (error.code === 'P2002') {
    //     throw new ApiError(USER.USERNAME_TAKEN, 'errors.api.user.usernameTaken')
    //   }
    // }

    // if (other error) {
    //   throw new ApiError(USER.USERNAME_TAKEN, 'errors.api.user.usernameTaken')
    // }

    throw new ApiError(SERVER.INTERNAL_SERVER_ERROR, 'errors.api.server.internalServerError')
  }
}
