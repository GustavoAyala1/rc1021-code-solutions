import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: ''
    };
  }

  handleClick(e) {
    const target = e;
    if (this.state.id === target) {
      this.setState({ id: '' });
    } else {
      this.setState({ id: target });
    }
  }

  render() {
    const { items } = this.props;

    const arrayItem = items.map(item =>
      (
       // eslint-disable-next-line react/jsx-key
       <div onClick={() => this.handleClick(item.id)}>
        <p className='header' >{item.title}</p>
        <p className={this.state.id === item.id ? 'body' : 'body hidden'}>{item.content}</p>
      </div>
      )
    );

    return (
      <div>
         { arrayItem }
      </div>
    );
  }
}

export default Accordion;
