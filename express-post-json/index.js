const express = require("express");
const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.post("/api/grades", (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const grade = req.body.grade;
  const id = nextId;

  grades[nextId] = { id, name, course, grade };
  nextId++;
  res.status(201);
  res.send(grades);
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
