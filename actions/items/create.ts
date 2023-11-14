import type { Item } from '@prisma/client'
import { revalidatePath } from 'next/cache'

import type { ApiErrorMessage } from '@/types'
import { API_ERROR_MESSAGES, getAuthSession } from '@/utils'
import { prisma } from '@/lib'

type CreateItemRequest = {
  title: string
}

type CreateItemSuccessResponse = {
  item: Item
}

type CreateItemErrorResponse = {
  error: ApiErrorMessage
}

type CreateItemResponse = CreateItemSuccessResponse | CreateItemErrorResponse

export const createItem = async (request: CreateItemRequest, pathToRevalidate?: string): Promise<CreateItemResponse> => {
  try {
    const session = await getAuthSession()

    if (!session) {
      return { error: API_ERROR_MESSAGES.SERVER.UNAUTHORIZED }
    }

    const result = await prisma.item.create({
      data: {
        userId: session.user.id,
        title: request.title
      }
    })

    if (pathToRevalidate) {
      revalidatePath(pathToRevalidate)
    }

    return { item: result }
  } catch (error) {
    console.error(error)
    return { error: API_ERROR_MESSAGES.SERVER.INTERNAL_ERROR }
  }
}
