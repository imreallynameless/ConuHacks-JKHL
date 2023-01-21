import JSONdb from "simple-json-db";

// Temporary solution. Use something like 'redis' in the future
const db = new JSONdb("db.json");

export default function handler(req, res) {
  if (req.method == "POST") {
    const OrderID = req.body.OrderID;
    delete req.body.OrderID;
    db.set(OrderID, req.body);
    res.status(200).json({ status: "Success" });
    return;
  }

  res.status(200).json({ data: db.JSON() });
}
