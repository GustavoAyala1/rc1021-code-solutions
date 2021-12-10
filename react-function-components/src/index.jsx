import React from 'react';
import ReactDOM from 'react-dom';

const div = document.querySelector('#root');

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const element = <CustomButton text='CLICK ME!'/>;

ReactDOM.render(element, div);
