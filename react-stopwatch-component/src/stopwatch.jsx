import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, playing: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  handleClick() {
    this.setState({ time: this.state.time + 1, playing: !this.state.playing });
    if (!this.state.time > 1) this.handleTimer();

  }

  handleTimer() {
    let autoCounter;
    if (this.state.playing) {
      autoCounter = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
      return;
    }

    clearInterval(autoCounter);

  }

  render() {
    const { time, playing } = this.state;
    // console.log(time, playing);
    if (time === 1) this.handleTimer();
    return (
    <div className='stopDiv'>
      <div className='border'>{time} <span className='play'></span></div>
      <button className='btn' onClick={this.handleClick}>{!playing ? 'PLAY!' : 'STOP!'}</button>
    </div>
    );
  }
}

export default StopWatch;
