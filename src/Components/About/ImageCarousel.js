/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.css";

class ImageCarousel extends React.Component {
    render() {
        return (
            <div>
                <section id="about">
                <div className="row">
                <Carousel autoPlay interval="5000" transitionTime="5000" position="center" top="108px" left="108px" width="1000px" height= "700px" >
                    <div>
                        <img src="https://i.ibb.co/Tv861RB/1.png" alt="image 1" />
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/VDXQGrK/2.png" alt="image 2" />
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/q1QHCrC/3.png" alt="image 3"/>
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/8xN9qQZ/4.png" alt="image4"/>
                        
                    </div>
                </Carousel>
                </div>
                </section>
                
            </div>
        )
    };
  render() {
    return (
      <div>
        <section id="about">
          <div className="row">
            <Carousel
              autoPlay
              interval="5000"
              transitionTime="5000"
              position="center"
              top="108px"
              left="108px"
              width="1000px"
              height="700px"
            >
              <div>
                <img src="https://i.ibb.co/Tv861RB/1.png" alt="" />
              </div>
              <div>
                <img src="https://i.ibb.co/VDXQGrK/2.png" alt="" />
              </div>
              <div>
                <img src="https://i.ibb.co/q1QHCrC/3.png" alt="" />
              </div>
              <div>
                <img src="https://i.ibb.co/8xN9qQZ/4.png" alt="" />
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    );
  }

}

export default ImageCarousel;
