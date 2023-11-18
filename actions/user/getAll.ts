import { prisma } from '@/lib'

export const getAllUsers = async () => {
  try {
    const result = await prisma.user.findMany({
      select: {
        name: true
      }
    })
    return result
  } catch (error) {
    console.error(error)
  }
}
