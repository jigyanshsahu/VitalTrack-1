import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


// express app setup
const app = express()
const port = process.env.PORT || 4000
dotenv.config();
connectDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
