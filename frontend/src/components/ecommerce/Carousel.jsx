import React from 'react';
import { Carousel } from 'antd';
import Slider1 from "../../assets/slider1.jpg"
import Slider2 from "../../assets/slider2.jpg"
import Slider3 from "../../assets/slider3.jpg"
import Slider5 from "../../assets/Slider5.jpg"
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => (
  <Carousel autoplay>
    <div>
      {/* Replace with an actual image URL or remove if not needed */}
      <img src={Slider1} alt="Slide 1" style={{ ...contentStyle, height: 'auto' }} />
    </div>
    <div>
    <img src={Slider2} alt="Slide 1" style={{ ...contentStyle, height: 'auto' }} />
    </div>
    <div>
    <img src={Slider3} alt="Slide 1" style={{ ...contentStyle, height: 'auto' }} />
    </div>
    <div>
    <img src={Slider1} alt="Slide 1" style={{ ...contentStyle, height: 'auto' }} />
    </div>
  </Carousel>
);

export default Slider;
