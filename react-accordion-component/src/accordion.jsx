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
    // const target = e.target;
    // console.log(target);
    // target.classList.toggle('hidden');

  }

  render() {
    const { items } = this.props;
    const arrayItem = items.map(first => [first.id, first.title, first.content]);

    const elements = arrayItem.map(el => (

      <div key={el[0]}>
        <div>
           <p className='header' onClick={this.handleClick}>{el[1]}</p>
        </div>
        <div>
          <p className='body hidden true'>{el[2]}</p>
        </div>
      </div>

    ));

    return (
      <div>
        <h1>HI</h1>
         { elements }
      </div>
    );
  }
}

export default Accordion;
