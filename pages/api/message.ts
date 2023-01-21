// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import JSONdb from "simple-json-db";

type Data = {
  name: string;
};

// Temporary solution. Use something like 'redis' in the future
const db = new JSONdb("db.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const OrderID = req.body.OrderID;
  delete req.body.OrderID;
  db.set(OrderID, req.body);

  res.status(200).json({ status: "Success", data: db.JSON() });
}
