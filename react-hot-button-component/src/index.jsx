import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.counter = 0;
  }

  handleClick() {
    this.setState({ isClicked: true });
    this.counter++;
  }

  render() {
    const clicked = this.state.isClicked;
    // eslint-disable-next-line react/prop-types

    if (this.counter < 3) {
      return <button onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    } else if (this.counter >= 3 && this.counter < 6) {
      return <button className='lowest' onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    } else if (this.counter >= 6 && this.counter < 9) {
      return <button className='low' onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    } else if (this.counter >= 9 && this.counter < 12) {
      return <button className='forgotten' onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    } else if (this.counter >= 12 && this.counter < 15) {
      return <button className='medium' onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    } else if (this.counter >= 15 && this.counter < 18) {
      return <button className='hot' onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    } else if (this.counter >= 18) {
      return <button className='hottest' onClick={this.handleClick}>{ clicked ? 'Hot Button' : this.props.text }</button>;
    }

  }
}

export default CustomButton;
