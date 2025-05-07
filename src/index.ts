import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("listen on port ", port, "!"));

app.get("/", (req, res) => {
  res.send("hello world");
});
