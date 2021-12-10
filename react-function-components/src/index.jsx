import React from 'react';
import ReactDOM from 'react-dom';

const div = document.querySelector('#root');
function CustomButton() {
  return (
    <button>Click Me!</button>
  );
}

ReactDOM.render(CustomButton(), div);
