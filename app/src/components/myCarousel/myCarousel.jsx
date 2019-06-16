import React, { Component }  from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './myCarousel.scss'


import sample1 from '../../assets/samples/sample-1.jpeg'
import sample2 from '../../assets/samples/sample-2.jpeg'
import sample3 from '../../assets/samples/sample-3.jpeg'

import Page1 from '../../assets/aboutMe/1.png';
import Page2 from '../../assets/aboutMe/2.png';
import Page3 from '../../assets/aboutMe/3.png';
import Page4 from '../../assets/aboutMe/4.png';
import Page5 from '../../assets/aboutMe/5.png';
import Page6 from '../../assets/aboutMe/6.png';
import Page7 from '../../assets/aboutMe/7.png';
import Page8 from '../../assets/aboutMe/8.png';
import Page9 from '../../assets/aboutMe/9.png';
import Page10 from '../../assets/aboutMe/10.png';


class MyCarousel extends Component {
  render() {
    return (
      <div className="carouselWrapper">

        <div className="carouselContainer">
          <Carousel showThumbs={false}
                    emulateTouch={true}>
            <div>
              <img className="carouselItem" src={Page1} alt="1" />
            </div>
            <div>
              <img className="carouselItem" src={Page2} alt="2" />
            </div>
            <div>
              <img className="carouselItem" src={Page3} alt="3" />
            </div>
                  
          </Carousel>
        </div>
        
      </div>
    );
  }
}

export default MyCarousel;
