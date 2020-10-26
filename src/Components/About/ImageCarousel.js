/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';

class ImageCarousel extends React.Component {
  render() {
    return (
      <div>
        <section id="about">
          <center>
            <Carousel
              autoPlay
              interval="2000"
              transitionTime="1000"
              position="center"
              width="90%"
            >
              <div>
                <img src="https://i.ibb.co/Tv861RB/1.png" alt="image 1" />
              </div>
              <div>
                <img src="https://i.ibb.co/VDXQGrK/2.png" alt="image 2" />
              </div>
              <div>
                <img src="https://i.ibb.co/q1QHCrC/3.png" alt="image 3" />
              </div>
              <div>
                <img src="https://i.ibb.co/8xN9qQZ/4.png" alt="image4" />
              </div>
            </Carousel>
          </center>
        </section>
      </div>
    );
  }
}

export default ImageCarousel;
