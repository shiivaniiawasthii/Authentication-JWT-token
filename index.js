const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hey");
});
app.listen(8080);
