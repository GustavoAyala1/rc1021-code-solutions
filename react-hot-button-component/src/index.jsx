import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.counter = 0;

  }

  handleClick() {
    this.setState({ clicks: this.counter++ });
    this.counter++;
  }

  render() {

    let classes;
    // eslint-disable-next-line react/prop-types

    if (this.counter >= 3 && this.counter < 6) {
      classes = 'lowest';
    } else if (this.counter >= 6 && this.counter < 9) {
      classes = 'low';
    } else if (this.counter >= 9 && this.counter < 12) {
      classes = 'forgotten';
    } else if (this.counter >= 12 && this.counter < 15) {
      classes = 'medium';
    } else if (this.counter >= 15 && this.counter < 18) {
      classes = 'hot';
    } else if (this.counter >= 18) {
      classes = 'hottest';
    }
    return (<button className= {classes} onClick={this.handleClick}>Hot Button!</button>);
  }
}

const element = <CustomButton />;

ReactDOM.render(element, document.querySelector('#root'));
