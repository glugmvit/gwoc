import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1
            className="responsive-headline"
            style={{ textAlignVertical: 'center', textAlign: 'center' }}
          >
            REGISTER
          </h1>
        </div>

        <br></br>
        <div class="example-2 card">
          <div class="wrapper">
            <div class="header">
              <ul class="menu-content"></ul>
            </div>
            <div class="data">
              <div class="content">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelgT2ntgsHyZg-UkIys2r38SJwJlT63oBeBznCzDl1UnbkZw/viewform?usp=sf_link"
                  class="button"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="example-1 card">
          <div class="wrapper">
            <div class="header">
              <ul class="menu-content"></ul>
            </div>
            <div class="data">
              <div class="content">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsD1HoShQei19Hli0DzZUGH3ZxMvsA1h_a9ukHn53jEX4EHw/viewform?usp=sf_link
"
                  class="button"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
