import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db_connect/dbConnect";

import cors from "cors"
import contactRouter from "./routes/contactRouter";
dotenv.config();

dbConnect()
const app = express();


app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:3000', 'https://api.ai-webkraft.de/api'],
        credentials: true
    }));
// app.use(cors({ credentials: true, origin: "https://portfolio.khalil-dev.me" }));
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "API is running!" });
  });
  

app.use("/contact", contactRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running an PORT ${PORT}`));
