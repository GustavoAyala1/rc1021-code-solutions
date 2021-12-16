import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ counter: 0, urlLength: this.props.url.length });
    this.handleCounter = null;
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLeft() {
    clearInterval(this.handleCounter);
    this.handleInterval();
    if (this.state.counter === 0) {
      this.setState({ counter: this.state.urlLength - 1 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  handleRight() {
    clearInterval(this.handleCounter);
    this.handleInterval();
    if (this.state.counter === this.state.urlLength - 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  handleInterval() {
    this.handleCounter = setInterval(() => {
      this.setState({ counter: this.state.counter === this.state.urlLength - 1 ? 0 : this.state.counter + 1 });
    }, 3000);
  }

  handleClick(e) {
    const target = e.target;
    const targetAtt = +target.getAttribute('data-carousel');
    clearInterval(this.handleCounter);
    this.handleInterval();
    this.setState({ counter: targetAtt });

  }

  render() {
    clearInterval(this.handleCounter);
    this.handleInterval();
    const { url } = this.props;
    const { counter } = this.state;
    const emptyDot = 'far fa-circle dots';
    const filledDot = 'fas fa-circle dots';

    const dots = url.map((imgs, i) => (
          <div key={i}>
              <i className={i === counter ? filledDot : emptyDot} data-carousel={i} onClick={this.handleClick}></i>
          </div>
    ));

    return (
      <div className='carousel'>
        <i className="fas fa-chevron-left arrow" onClick={this.handleLeft}></i>
        <img src={url[counter]} className='img'/>
        <i className="fas fa-chevron-right arrow" onClick={this.handleRight}></i>
        <div className='dotRow'>
        {dots}
        </div>
      </div>
    );
  }
}

export default Carousel;
