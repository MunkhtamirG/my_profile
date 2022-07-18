const express = require("express");
const app = express();
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
let profile;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

readFile("./models/profile.json", "utf-8", (err, profileData) => {
  if (err) {
    console.error(err);
  } else {
    profile = JSON.parse(profileData);
  }
});

app.get("/name", (req, res) => {
  res.json({ name: profile.firstname });
});

app.get("/age", (req, res) => {
  res.send({ age: profile.age });
});

app.get("/major", (req, res) => {
  res.send({ major: profile.major });
});

app.get("/profile", (req, res) => {
  res.send(profile);
});

app.listen(3001, () => {
  console.log("Server running on 3001");
});