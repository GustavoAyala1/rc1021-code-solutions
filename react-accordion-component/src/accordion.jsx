import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      classHid: 'body hidden'
    };
  }

  handleClick(e) {
    const target = e.target.nextElementSibling;
    target.classList.toggle('hidden');

  }

  render() {
    const { items } = this.props;

    const arrayItem = items.map(first => [Object.keys(first), Object.values(first)]);

    const elements = arrayItem.map(el => (
      <div key={el[0]}>
        <p className='header' onClick={this.handleClick}>{el[0]}</p>
        <p className='body hidden true'>{el[1]}</p>
      </div>
    )
    );

    return (
      <div>
        { elements }
      </div>

    );
  }
}

export default Accordion;
