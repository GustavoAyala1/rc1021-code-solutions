import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: null
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('State:', this.state);

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" placeholder='Email Here' name="email" onChange={this.handleChange}></input>
        <button >Sign Up</button>
      </form>
    );
  }
}

const formElement = <NewsLetterForm/>;

ReactDOM.render(formElement, document.querySelector('#root'));
