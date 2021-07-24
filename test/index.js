const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// lestening
const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server listening in port:", PORT);
});

// basic with data sending

app.get("/", (req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ name: "myName", age: 30 });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.setHeader("Content-Type", "application/json");
  res.status(300).json({ redirect: true });
});

app.delete("/", (req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "application/json");
  res.status(404).json("not allowed");
});

app.put("/", (req, res) => {
  console.log(req);
  res.cookie("test","application");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ message: "your welcome" });
});
