const express = require('express');
const app = express();
const fs = require('fs');
const notesJson = require('./data.json');

const writingFile = () => {};

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const gradesArray = [];
  if (notesJson.notes) {
    for (const notes in notesJson.notes) {
      gradesArray.push(notesJson.notes[notes]);
    }
  } else if (!notesJson.notes) {
    res.json([]);
  }
  res.json(gradesArray);
});

app.get('/api/notes/:id', (req, res) => {
  let noteGet = {};
  const id = +req.params.id;

  if (notesJson.notes[id]) {
    noteGet = notesJson.notes[id];
    res.status(200);
  } else if (id < 0 || !Number.isInteger(id)) {
    noteGet.error = 'Id must be a positive integer';
    res.status(400);
  } else if (!notesJson.notes[id]) {
    noteGet.error = `Error: cannot find note with id ${id}`;
    res.status(404);
  }

  res.json(noteGet);
});

app.post('/api/notes', (req, res) => {
  const content = req.body.content;
  let newNote = {};
  if (content === undefined || content === '') {
    newNote.error = 'content is a require field';
    res.status(400).json(newNote);
  } else if (content) {
    const id = notesJson.nextId++;
    newNote = {
      id,
      content
    };
    notesJson.notes[id] = newNote;
    fs.writeFile('./data.json', JSON.stringify(notesJson), err => {
      if (err) {
        console.error('An unexpected error occurred');
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deletedNote = {};
  const id = Math.trunc(+req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    deletedNote.error = 'id must be a positive integer';
    res.status(400).json(deletedNote);
  } else if (!notesJson.notes[id]) {
    deletedNote.error = `cannot find note with id ${id}`;
    res.status(404).json(deletedNote);
  } else if (notesJson.notes[id]) {
    deletedNote.deleted = 'Successfully deleted';
    delete notesJson.notes[id];
    writingFile();
    res.status(204).json(deletedNote);
  } else {
    deletedNote.error = 'An unexpected error occurred';
    res.status(500).json(deletedNote);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const replaceNote = {};
  const content = req.body.content;
  const id = Math.trunc(+req.params.id);

  if (!id || id < 0 || isNaN(id)) {
    replaceNote.error = 'id must be a positive integer';
    res.status(400).json(replaceNote);
  } else if (!notesJson.notes[id]) {
    replaceNote.error = 'note with this id does not exist';
    res.status(404).json(replaceNote);
  } else if (content === undefined && notesJson.notes[id]) {
    replaceNote.error = 'content is a required field';
    res.status(400).json(replaceNote);
  } else if (notesJson.notes[id] && content !== undefined) {
    notesJson.notes[id].content = content;
    fs.writeFile('./data.json', JSON.stringify(notesJson), err => {
      if (err) {
        console.error('An unexpected error occurred');
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(notesJson.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
