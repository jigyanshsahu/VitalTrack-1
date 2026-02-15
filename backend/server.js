import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import homeRoutes from "./routes/home.js";
import userRouter from "./routes/userroute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("api working");
});

// database connection
connectDB();

// server.js
app.use("/home", homeRoutes);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
