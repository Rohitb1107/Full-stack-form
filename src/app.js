const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");

app.set("view engine", "hbs");

app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
