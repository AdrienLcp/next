import type { ApiErrorMessage } from '@/types'
import { API_ERROR_MESSAGES, getPrismaErrorTargetKeys, isPrismaError, isUsernameValid } from '@/utils'
import { prisma } from '@/lib'

type CreateUserRequest = {
  name: string
}

type CreateUserErrorResponse = {
  error: ApiErrorMessage
}

type CreateUserSuccessResponse = {
  name: string
}

type CreateUserResponse = CreateUserSuccessResponse | CreateUserErrorResponse

export const createUser = async (request: CreateUserRequest): Promise<CreateUserResponse> => {
  try {
    const { name } = request

    if (!name) {
      return { error: API_ERROR_MESSAGES.USER.USERNAME_REQUIRED }
    }

    if (typeof name !== 'string') {
      return { error: API_ERROR_MESSAGES.SERVER.BAD_REQUEST }
    }

    if (!isUsernameValid(name)) {
      return { error: API_ERROR_MESSAGES.USER.INVALID_USERNAME }
    }
 
    const user = await prisma.user.create({
      data: {
        name
      } 
    })

    return { name: user.name || '' }
    
  } catch (error) {
    console.error(error)
    
    if (isPrismaError(error)) {
      const targetKeys = getPrismaErrorTargetKeys(error)

      if (targetKeys.includes('name')) {
        return { error: API_ERROR_MESSAGES.USER.USERNAME_TAKEN }
      }
    }

    return { error: API_ERROR_MESSAGES.SERVER.INTERNAL }
  }
}
