import React from 'react';
import ReactDOM from 'react-dom';

class Password extends React.Component {
  render() {
    return (<h1>Hello</h1>);
  }
}

const element = <Password/>;

ReactDOM.render(element, document.querySelector('#root'));
