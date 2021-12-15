import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, playing: false };
    this.handleTimer = null;
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleClick() {
    if (this.state.time > 1 && !this.state.playing) {
      this.setState({ time: 0, playing: false });
    } else {
      this.setState({ time: this.state.time + 1, playing: !this.state.playing });
    }
    // this.setState({ time: this.state.time + 1, playing: !this.state.playing });

  }

  handleCounter() {
    this.handleTimer = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  resetState() {
    this.setState({ time: 0 });
    this.handleClick();
  }

  render() {
    const { time, playing } = this.state;

    if (time === 1) { this.handleCounter(); } else if (!playing) { clearInterval(this.handleTimer); }

    return (
    <div className='stopDiv'>
      <div className='border'>{time} <span className='play'></span></div>
      <button className='btn' onClick={this.handleClick}>{!playing ? <i className="fas fa-play"></i> : <i className="fas fa-pause-circle"></i>}</button>
    </div>
    );
  }
}

export default StopWatch;
