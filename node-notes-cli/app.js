const fs = require('fs');
const notesJson = require('./data.json');

const updateJson = whatEvent => {
  fs.writeFile('data.json', JSON.stringify(notesJson), err => {
    if (err) throw err;
    console.log(`${whatEvent} complete`);
  });
};

if (process.argv[2] === 'read') {
  for (const [key, value] of Object.entries(notesJson.notes)) {
    console.log(`${key}: ${value}`);
  }
} else if (process.argv[2] === 'create') {
  notesJson.notes[`${notesJson.nextId}`] = process.argv[3];
  notesJson.nextId++;
  updateJson('create');
} else if (process.argv[2] === 'delete') {
  delete notesJson.notes[process.argv[3]];
  updateJson('delete');
} else if (process.argv[2] === 'update') {
  notesJson.notes[process.argv[3]] = process.argv[4];
  updateJson('update');
}
