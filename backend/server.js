import express from "express";
import cors from "cors";
import "dotenv/config.js";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",              // local frontend
    "http://localhost:5174",              // local admin (if any)
    "https://fod-del.vercel.app",          // frontend vercel
    "https://fod-del-admin.vercel.app"    // admin vercel
  ],
  credentials: true
}));

// db connection
connectDB();

// api routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// ⚠️ Render supports file uploads, so this is OK
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

// start server (REQUIRED for Render)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
