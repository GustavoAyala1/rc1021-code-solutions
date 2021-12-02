const express = require("express");
const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.post("/api/grades", (req, res) => {
  const { name, course, grade } = req.body;
  const newGrade = { name, course, grade };
  const id = nextId;
  newGrade.id = id;

  grades[id] = newGrade;
  nextId++;
  res.status(201).json(grades);
});

app.get("/api/grades", (req, res) => {
  console.log("in get");
  const gradesArray = [];
  for (let id in grades) {
    gradesArray.push(grades[id]);
  }
  res.send(gradesArray);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
