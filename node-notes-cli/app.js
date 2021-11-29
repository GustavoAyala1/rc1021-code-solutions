const fs = require('fs');
const notesJson = require('./data.json');

if (process.argv[2] === 'read') {
  for (const [key, value] of Object.entries(notesJson.notes)) {
    console.log(`${key}: ${value}`);
  }
} else if (process.argv[2] === 'create') {
  notesJson.notes[`${notesJson.nextId}`] = process.argv[3];
  notesJson.nextId++;
  fs.writeFile('data.json', JSON.stringify(notesJson), err => {
    if (err) throw err;
    console.log('create complete');
  });
} else if (process.argv[2] === 'delete') {
  delete notesJson.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(notesJson), err => {
    if (err) throw err;
    console.log('delete complete');
  });
}

// console.log(notesJson.notes);
