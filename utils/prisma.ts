import { Prisma } from '@prisma/client'

export const isPrismaError = (error: unknown): error is Prisma.PrismaClientKnownRequestError => {
  return error instanceof Prisma.PrismaClientKnownRequestError
}

export const getPrismaErrorTargetKeys = (error: Prisma.PrismaClientKnownRequestError): string[] => {
  if (error.code === 'P2002') {
    const targets = error.meta?.target ?? []

    if (Array.isArray(targets) && targets.every(element => typeof element === 'string')) {
      return targets
    }
  }

  return []
}
