import React from 'react';
import './Card.css';

// class Card extends React.Component{
//     render(){
//         return(
//                 <div>

//                   <section id="register">

//                   <div className="row banner">
//                   <div className="banner-text">
//                   <h1 className="responsive-headline" style={{textAlignVertical: "center",textAlign: "center",}}>REGISTER</h1>
//                   </div>

//                         <br></br>
//       <div class="example-2 card">
//         <div class="wrapper">
//           <div class="header">

//             <ul class="menu-content">

class Card extends React.Component {
  render() {
    return (
      <div className="row banner" id="register" style={{ paddingTop: '60px' }}>
        <div className="banner-text">
          <h1
            className="responsive-headline"
            style={{ textAlignVertical: 'center', textAlign: 'center' }}
          >
            REGISTER
          </h1>
        </div>

        <br></br>
        <div className="example-2 card">
          <div className="wrapper">
            <div className="header">
              <ul className="menu-content"></ul>
            </div>
            <div className="data">
              <div className="content">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelgT2ntgsHyZg-UkIys2r38SJwJlT63oBeBznCzDl1UnbkZw/viewform?usp=sf_link"
                  className="button"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="example-1 card">
          <div className="wrapper">
            <div className="header">
              <ul className="menu-content"></ul>
            </div>
            <div className="data">
              <div className="content">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsD1HoShQei19Hli0DzZUGH3ZxMvsA1h_a9ukHn53jEX4EHw/viewform?usp=sf_link"
                  className="button"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      // </div>
      // </section>
      // </div>
    );
  }

  // </div>
  ' );';
}

export default Card;
