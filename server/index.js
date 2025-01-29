import express from "express";
import { connectDB } from "./config/db.js";


const port = 3000;

connectDB();

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("test");
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



