import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateUserError, ServerError } from '@/utils'

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { username, password } = req.body

    if (!username) {
      return res.status(400).json({ message: CreateUserError.UsernameRequired })
    }

    if (!password) {
      return res.status(400).json({ message: CreateUserError.PasswordRequired })
    }

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: ServerError.InternalServerError })
  }
}

export default POST
