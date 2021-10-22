const books = [
  {
    isbn: '741213736138',
    title: 'Misery',
    author: 'Stephen King'
  },
  {
    isbn: '355134351534347',
    title: 'The Dark Tower',
    author: 'Stephen King'
  },
  {
    isbn: '12313543448778',
    title: 'The Mist',
    author: 'Stephen King'
  }
];
console.log('Type of books', typeof books);

const stringified = JSON.stringify(books);
console.log('Type of stringified', typeof stringified, stringified);

const string = '{ "numberId": "645212", "name": "Tanner" }';
console.log('Type of string', typeof string, string);

const parsed = JSON.parse(string);
console.log('Type of parsed', typeof parsed, parsed);
