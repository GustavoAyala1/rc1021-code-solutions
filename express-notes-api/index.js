const express = require("express");
const app = express();
const fs = require("fs");
const notesJson = require("./data.json");

const writingFile = () => {
  fs.writeFile(`derp/data.json`, JSON.stringify(notesJson), (err) => {
    if (err) {
      console.error("An unexpected error occurred");
  });
}}

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

app.post("/api/notes", (req, res) => {
  const content = req.body.content;
  let newNote = {};
  if (content === undefined) {
    newNote.error = "content is a require field";
    res.status(400).json(newNote);
  } else if (content) {
    const id = notesJson.nextId++;
    newNote = {
      id,
      content,
    };
    notesJson.notes[id] = newNote;
    writingFile();
    res.status(201).json(newNote);
  } else {
    noteGet.error = "An unexpected error occurred";
    res.status(500).json(newNote);
  }
});

app.delete("/api/notes/:id", (req, res) => {
  let deletedNote = {};
  const id = req.params.id;
  if (id < 0) {
    deletedNote.error = "id must be a positive integer";
    res.status(400);
  } else if (!notesJson.notes[id]) {
    deletedNote.error = `cannot find note with id ${id}`;
  } else if (notesJson.notes[id]) {
    deletedNote.deleted = "Successfully deleted";
    delete notesJson.notes[id];
    writingFile();
    res.status(204).json(deletedNote);
  } else {
    deletedNote.error = "An unexpected error occurred";
    res.status(500).json(deletedNote);
  }
});

app.put("/api/notes/:id", (req, res) => {
  let replaceNote = {};
  let content = req.body.content;
  const id = req.params.id;

  if (!id || id < 0) {
    replaceNote.error = "id must be a positive integer";
    res.status(400).json(replaceNote);
  } else if (!notesJson.notes[id]) {
    replaceNote.error = "note with this id does not exist";
    res.status(404).json(replaceNote);
  } else if (content === undefined && notesJson.notes[id]) {
    replaceNote.error = "content is a required field";
    res.status(404).json(replaceNote);
  } else if (notesJson.notes[id] && content !== undefined) {
    notesJson.notes[id].content = content;
    writingFile();
    res.status(200).json(notesJson.notes[id]);
  } else {
    replaceNote.error = "An unexpected error occurred";
    res.status(500).json(replaceNote);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
