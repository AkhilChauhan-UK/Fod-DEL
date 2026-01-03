import express from "express";
import cors from "cors";
import "dotenv/config.js";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// ✅ CORS FIX (IMPORTANT)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://fod-del.vercel.app",
    "https://fod-del-admin.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}));

// ⚠️ Preflight fix
app.options("*", cors());

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Static (Render OK)
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
