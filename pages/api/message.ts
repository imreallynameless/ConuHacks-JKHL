// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// Temporary solution. Use something like 'redis' in the future
const buffer = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const OrderID = req.body.OrderID;
  delete req.body.OrderID;
  buffer[OrderID] = req.body;

  res.status(200).json(buffer);
}
