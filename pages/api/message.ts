import JSONdb from "simple-json-db";
import NextCors from "nextjs-cors";

// Temporary solution. Use something like 'redis' in the future
const db = new JSONdb("db.json");

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method == "POST") {
    const OrderID = req.body.OrderID;
    delete req.body.OrderID;
    db.set(OrderID, req.body);
    res.status(200).json({ status: "Success" });
    return;
  }

  res.status(200).json({ data: db.JSON() });
}
