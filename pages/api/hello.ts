// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from '../../node_modules/next/dist/shared/lib/utils';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const name = 'Francis';
  res.status(200).json({ message: `Hi! My name is ${name}`, name })
}
