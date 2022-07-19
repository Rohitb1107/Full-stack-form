const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");
const hbs = require("hbs");

const partialsPath = path.join(__dirname, "../partials");

app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/login", async (req, res) => {
  res.render("login");
});

app.get("/register", async (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
