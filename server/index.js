const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "anurag" });
});

app.listen(5000);