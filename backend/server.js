import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";

import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connect
connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// ❌ REMOVE this (Vercel doesn't support it)
// app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

// ❌ app.listen() MAT use karo
export default app;
