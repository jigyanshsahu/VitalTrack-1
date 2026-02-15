// routes/home.js
import express from "express";
import User from "../models/usermodel.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.userId);

  res.json({
    name: user.name,

    lastLogin: user.lastLogin,
  });
});

export default router;
