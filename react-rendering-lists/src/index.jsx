import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const list = pokedex.map(number =>
  <li key={number.number.toString()}>{number.name}</li>
);

const element = <ul> {list} </ul>;

ReactDOM.render(element, document.querySelector('#root'));
