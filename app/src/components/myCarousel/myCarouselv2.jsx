import React, { Component }  from 'react';
import {Carousel} from 'react-materialize';
import './myCarouselv2.scss'

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


class MyCarouselv2 extends Component {
  render() {
    return(
      <div className="carouselv2Wrapper">
      
        <Carousel className="storyCarousel" 
            options={{
              numVisible: 3,
              indicators: true,
              fullWidth: false,
              noWrap: true
            }}
            
            images={[
              Page1,
              Page2,
              Page3,
              Page4,
              Page5,
              Page6,
              Page7,
              Page8,
              Page9,
              Page10
            ]} 
          />
      </div>
    )
  }

}


export default MyCarouselv2;