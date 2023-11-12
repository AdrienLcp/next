'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib'

type CreateItemRequest = {
  userId: string
  title: string
}

export const createItem = async (request: CreateItemRequest, pathToRevalidate?: string) => {
  try {
    const { userId, title } = request

    const result = await prisma.item.create({
      data: {
        userId: request.userId,
        title: request.title
      }
    })

    if (pathToRevalidate) {
      revalidatePath(pathToRevalidate)
    }
  } catch (error) {
    console.error(error)
  }
}
