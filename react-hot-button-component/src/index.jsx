import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });

  }

  render() {

    const { clicks } = this.state;

    let classes;
    // eslint-disable-next-line react/prop-types

    if (clicks >= 3 && clicks < 6) {
      classes = 'lowest';
    } else if (clicks >= 6 && clicks < 9) {
      classes = 'low';
    } else if (clicks >= 9 && clicks < 12) {
      classes = 'forgotten';
    } else if (clicks >= 12 && clicks < 15) {
      classes = 'medium';
    } else if (clicks >= 15 && clicks < 18) {
      classes = 'hot';
    } else if (clicks >= 18) {
      classes = 'hottest';
    }
    return (<button className= {classes} onClick={this.handleClick}>Hot Button!</button>);
  }
}

const element = <CustomButton />;

ReactDOM.render(element, document.querySelector('#root'));
