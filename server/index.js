import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";
import cors from "cors";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("test");
});

app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
    return res.status(404).json({ message: "end-point does not exist" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
