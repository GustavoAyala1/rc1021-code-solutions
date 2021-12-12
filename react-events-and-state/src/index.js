import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;
    // eslint-disable-next-line react/prop-types
    return <button onClick={this.handleClick}>{ clicked ? 'Thanks!' : this.props.text }</button>;
  }
}

const element = (<CustomButton text="Click Me!"/>);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
