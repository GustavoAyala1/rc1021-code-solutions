import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, playing: false };
    this.handleTimer = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleCounter = this.handleCounter.bind(this);

  }

  handleClick() {
    const { time, playing } = this.state;

    clearInterval(this.handleTimer);

    if (time > 0 && playing) {
      this.setState({ playing: false });
    } else if (!playing && time > 0) { this.setState({ time: 0 }); } else {
      this.setState({ time: time + 1, playing: !playing });
      this.handleCounter();
    }

  }

  handleCounter() {
    this.handleTimer = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  render() {
    const { time, playing } = this.state;

    return (
    <div className='stopDiv'>
      <div className='border'>{time} <span className='play'></span></div>
      <button className='btn' onClick={this.handleClick}>{!playing ? <i className="fas fa-play"></i> : <i className="fas fa-pause-circle"></i>}</button>
    </div>
    );
  }
}

export default StopWatch;
