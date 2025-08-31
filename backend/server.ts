import express = require("express");
import cors = require("cors");

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
  res.send({ message: "Hallo from the backend!" });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
