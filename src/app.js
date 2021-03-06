const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");

const Register = require("../models/register.model");

const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.get("/", async (req, res) => {
  res.render("index");
});

// Register part

app.get("/register", async (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const password2 = req.body.password2;

    if (password === password2) {
      const registerUser = new Register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
      });

      const addUser = await registerUser.save();
      res.status(201).render("login");
    } else {
      res.send("passwords are not matching");
    }
  } catch (err) {
    res.statusCode(400).send(err);
  }
});

// Login Part

app.get("/login", async (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userEmail = await Register.findOne({ email: email });

    if (userEmail.password === password) {
      res.status(201).render("index");
    } else {
      res.send("Something went wrong!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
