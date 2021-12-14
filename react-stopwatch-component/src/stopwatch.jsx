import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ timer: 0 });
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
    <div className='stopDiv'>
      <div className='border'>5 <span className='play'></span></div>
      <button className='btn stopBtn'></button>
    </div>
    );
  }
}

export default StopWatch;
