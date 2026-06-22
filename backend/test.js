import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./services/mongo.service.js";
import queryRoutes from "./routes/query.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

console.log("=================================");
console.log("DB_NAME:", process.env.DB_NAME);
console.log("COLLECTION_NAME:", process.env.COLLECTION_NAME);
console.log("=================================");

try {
  await connectDB();
  console.log("MongoDB Connected Successfully");
} catch (error) {
  console.error("MongoDB Connection Failed:");
  console.error(error);
}

app.use("/api/query", queryRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Athena-BI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});