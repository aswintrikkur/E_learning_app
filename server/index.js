import express from "express";

const app = express();
app.use(express.json())
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("test");
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



