import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db_connect/dbConnect";
import feedbackRouter from "./routes/feedbackRouter";
import cors from "cors"
import contactRouter from "./routes/contactRouter";
dotenv.config();

dbConnect()
const app = express();


app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
app.use("/feedback",feedbackRouter)
app.use("/contact",contactRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running an PORT ${PORT}`));
