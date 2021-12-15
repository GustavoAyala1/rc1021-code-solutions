import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const array = [
  { 'Hypertext Markup Language': 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web' },
  { 'Cascading Style Sheets': 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web. Alongside HTML and JavaScript.' },
  { JavaScript: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly bracket syntax,dynamic typing, prototype-based object-orientation and first-class functions.' }
];

const element = <Accordion items={array}/>;

ReactDOM.render(element, document.querySelector('#root'));
