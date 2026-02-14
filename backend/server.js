import express from "express";

import { connectDB } from "./config/db.js";
const app = express()
const port = process.env.PORT || 4000


connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
