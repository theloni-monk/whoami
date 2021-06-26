// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//WRITEME: maybe make an api for something more useful, maybe a nosql blog?
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
