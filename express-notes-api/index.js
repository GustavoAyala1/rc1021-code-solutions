const express = require("express");
const app = express();
const fs = require("fs");
const notesJson = require("./data.json");

app.use(express.json());

app.get("/api/notes", (req, res) => {
  const gradesArray = [];
  if (notesJson.notes) {
    for (let notes in notesJson.notes) {
      gradesArray.push(notesJson.notes[notes]);
    }
  } else if (!notesJson.notes) {
    res.json([]);
  }
  res.json(gradesArray);
});

app.get("/api/notes/:id", (req, res) => {
  let noteGet = {};

  for (let notes in notesJson.notes) {
    if (notesJson.notes[req.params.id]) {
      noteGet = notesJson.notes[req.params.id];
    } else if (req.params.id < 0) {
      noteGet.error = "Id must be a positive integer";
      res.status(400);
    } else if (!notesJson.notes[req.params.id]) {
      noteGet.error = `Error: cannot find note with id ${req.params.id}`;
      res.status(404);
    }
  }
  res.json(noteGet);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
