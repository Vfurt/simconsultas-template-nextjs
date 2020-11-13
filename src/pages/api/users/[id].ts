import { UserType } from './../../../types/user.d'
import { usersMock } from '../../../mocks/users.mock'
import { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse<UserType>): void => {
  const {
    query: { id }
  } = req

  const result = usersMock.find(x => x.id === (id as string))

  setTimeout(() => res.status(200).json(result), 1500)
}
