import express from "express";
import { connectDB } from "./database/database.js";
import userroute from "./route/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();

connectDB();

app.use(express.json());
app.use(cors()); // Enable CORS for all origins
app.use(cookieParser())
app.use("/user", userroute);

app.get("/", (req, res) => {
  console.log(`server is working`);
  res.send(`Server is working`);
});
const port = process.env.PORT || 3700;
app.listen(port, () => {
  console.log(`server is runing on localhost:${port}`);
});
