import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/blog.js";
const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static("public/uploads"));

app.get("/", (req, res) => {
  res.send("API is running!");
});

// Api routes
app.use("/api/v1", authRoutes);

app.listen(port, () => {
  console.log(`APIs running on ${port}`);
});
