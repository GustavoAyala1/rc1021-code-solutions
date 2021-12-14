import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    console.log('State:', this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            name="fullName"
            type="text"
            id="full-name"
            value={this.state.fullName}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="signup-email">Email</label>
          <input
            name="email"
            type="email"
            id="signup-email"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            name="phone"
            type="tel"
            id="phone-number"
            value={this.state.phone}
            onChange={this.handleChange} />
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
