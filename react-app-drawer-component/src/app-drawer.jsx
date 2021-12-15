import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ closed: true });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    const { closed } = this.state;
    let brgClosed, divMenu, navDiv;

    if (closed) { brgClosed = 'brgBtn'; divMenu = 'menu divMenu displayHidden'; navDiv = 'navDiv'; } else {
      brgClosed = 'brgBtn displayHidden'; divMenu = 'menu divMenu'; navDiv = 'navDivDark';
    }

    return (
      <div className={navDiv}>
        <button className={brgClosed} onClick={this.handleClick}>
           <i className= 'fas fa-hamburger menuBrg'></i>
        </button>
        <div className={divMenu}>
          <h3 onClick={this.handleClick}>Menu</h3>
          <div className="menuItems" >
          <h6 onClick={this.handleClick}>About</h6>
          <h6 onClick={this.handleClick}>Get Started</h6>
          <h6 onClick={this.handleClick}>Sign In</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
