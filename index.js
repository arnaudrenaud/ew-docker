const express = require("express");
const mongoose = require("mongoose");

(async () => {
  console.log("Connecting to Mongo database…");
  await mongoose.connect("mongodb://mongodb:27017/testdocker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to Mongo.");

  const app = express().get("/", (req, res) => {
    res.json({ message: "Hello from Ex" });
  });

  app.listen(3000, () => {
    console.log("App running");
  });
})();
