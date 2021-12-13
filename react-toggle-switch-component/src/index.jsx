import React from 'react';
import ReactDOM from 'react-dom';

class CustomToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    let classes;

    if (!this.state.isToggleOn) {
      classes = 'slider round';
    } else { classes = 'slider round onSlider'; }

    return (
      <label className='switch'>
            <input type="checkbox" onClick={this.handleToggle}/>
            <span className={classes}></span>
      </label>
    );
  }
}

const element = <CustomToggle />;

ReactDOM.render(element, document.querySelector('#root'));
