import { API_ERROR_MESSAGES, ApiError, getPrismaErrorTargetKeys, isPasswordValid, isPrismaError, isUsernameValid } from '@/utils'
import { prisma } from '@/lib'

type CreateUserRequest = {
  name: string
  password: string
}

type CreateUserResponse = {
  name: string
}

const { SERVER, USER } = API_ERROR_MESSAGES

export const createUser = async (request: CreateUserRequest): Promise<CreateUserResponse> => {
  try {
    const { name, password } = request

    if (!name) {
      throw new ApiError(USER.USERNAME_REQUIRED, 'errors.api.user.usernameRequired')
    }

    if (!password) {
      throw new ApiError(USER.PASSWORD_REQUIRED, 'errors.api.user.passwordRequired')
    }

    if (typeof name !== 'string' || typeof password !== 'string') {
      throw new ApiError(SERVER.BAD_REQUEST, 'errors.api.server.badRequest')
    }

    if (!isUsernameValid(name)) {
      throw new ApiError(USER.INVALID_USERNAME, 'errors.api.user.invalidUsername')
    }

    if (!isPasswordValid(password)) {
      throw new ApiError(USER.INVALID_PASSWORD, 'errors.api.user.invalidPassword')
    }
 
    const user = await prisma.user.create({
      data: {
        name
      } 
    })

    return { name: user.name || ''}
  } catch (error) {
    console.error(error)
    
    if (isPrismaError(error)) {
      const targetKeys = getPrismaErrorTargetKeys(error)

      if (targetKeys.includes('name')) {
        throw new ApiError(USER.USERNAME_TAKEN, 'errors.api.user.usernameTaken')
      }
    }

    throw new ApiError(SERVER.INTERNAL_SERVER_ERROR, 'errors.api.server.internalServerError')
  }
}
