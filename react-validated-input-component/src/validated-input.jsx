import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      password: '',
      acceptable: null,
      tooShort: true,
      noPw: true,
      hasNum: false,
      hasCap: false,
      isSpecial: false

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

  }

  render() {
    const { acceptable } = this.state;
    let classes;
    if (acceptable === null) { classes = 'displayHidden'; } else if (acceptable === 'correct') { classes = 'fas fa-check correct'; } else if (acceptable === 'wrong') { classes = 'fas fa-times-circle wrong'; }

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label>
          Password
          <div>
          <input value={this.state.password} name='password' type='password' onChange={this.handleChange}></input>
          <i className={classes}></i>
          </div>
        </label>
      </form>

    );
  }
}

export default Password;
