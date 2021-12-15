import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      password: '',
      acceptable: null,
      message: ''
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const spChars = /[!@#$%^&*()]+/;
    const capitals = /[A-Z]/;

    this.setState({ [name]: value });
    if (value.length === 0) {
      this.setState({ message: 'A password is required', acceptable: false });
    } else if (value.length < 8) {
      this.setState({ message: 'Your password is too short!', acceptable: false });
    } else if (!spChars.test(value)) {
      this.setState({ acceptable: false, message: 'Needs a special character!' });
    } else if (!capitals.test(value)) {
      this.setState({ acceptable: false, message: 'Needs a capital letter!' });
    } else {
      this.setState({ acceptable: true, message: '' });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    const { acceptable, message } = this.state;
    let classes;
    if (acceptable === null) { classes = 'displayHidden'; } else if (acceptable) { classes = 'fas fa-check correct'; } else if (!acceptable) { classes = 'fas fa-times-circle wrong'; }

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label>
          Password
          <div>
          <input value={this.state.password} name='password' type='password' onChange={this.handleChange}></input>
          <i className={classes}></i>
          </div>
          <p className='message'>{message}</p>
        </label>
      </form>

    );
  }
}

export default Password;
