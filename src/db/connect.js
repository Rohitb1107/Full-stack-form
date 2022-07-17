const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/fullstack-form", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected successfully!");
  })
  .catch((err) => {
    console.log("Something went wrong:", err);
  });
