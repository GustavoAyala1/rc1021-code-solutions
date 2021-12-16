import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ counter: 0, urlLength: this.props.url.length, handleInterval: null, dotCounter: 0 });
  }

  render() {
    // const { url } = this.props;
    // const { counter, urlLength, dotCounter } = this.state;
    // const urlObj = url.reduce((acc, cur, id) => {
    //   acc[id] = cur;
    //   return acc;
    // }, {});
    // console.log(urlObj);
    // const dots = urlObj.map((dot, index) => {
    //   return (
    //   <div className="fifth">
    //       <i className="fas fa-circle dots" data-carousel={dot[index]}></i>
    //   </div>
    //   );
    // });

    return (
      <div className='carousel'>
        <i className="fas fa-chevron-left arrow"></i>
        {/* <img src={url[counter]} className='img'/> */}
        <i className="fas fa-chevron-right arrow"></i>
      </div>
    );
  }
}

export default Carousel;

// <div className="row carousel">
//   {dots}
// </div>
