import express = require("express");
import cors = require("cors");
import type {Player} from "../types"

const app = express();
app.use(cors());
app.use(express.json());

let scores: Player[] = []

app.get("/hello", (req, res) => {
  res.send({ message: "Hallo from the backend!" });
});

app.post("/scores", (req, res) => {
  const player: Player = req.body
  scores.push(player)
  res.status(201).json(player)
})

app.get("/scores", (_req, res) => {
  res.json(scores)
})

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
