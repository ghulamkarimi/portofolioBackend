import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db_connect/dbConnect";
import cors from "cors";
import contactRouter from "./routes/contactRouter";

dotenv.config();
dbConnect();

const app = express();


app.use(express.json());
app.use(
    cors({
        origin: ['https://ai-webkraft.de', 'https://api.ai-webkraft.de'],
        credentials: true
    })
);

// ✅ API-Status-Route (Teste mit `curl -X GET https://www.ai-webkraft.de/api/`)
app.get("/api/", (req, res) => {
    res.json({ status: "ok", message: "🚀 Backend läuft!" });
});

// ✅ Health Check für Debugging
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "API is running!" });
});

// ✅ Kontaktformular-Route
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`✅ Server läuft auf PORT ${PORT}`));
