import React from 'react';
import './Card.css'

class Card extends React.Component{
    render(){
        return(
            
              <div class="row">
      
      <div class="example-2 card">
        <div class="wrapper">
          <div class="header">
            
            <ul class="menu-content">
              

            </ul>
          </div>
          <div class="data">
            <div class="content">
              
             
              
              <a href="#" class="button">Register</a>
            </div>
          </div>
        </div>
      </div>

      <div class="example-1 card">
        <div class="wrapper">
          <div class="header">
            
            <ul class="menu-content">
              

            </ul>
          </div>
          <div class="data">
            <div class="content">
              
             
              
              <a href="#" class="button">Register</a>
            </div>
          </div>
        </div>
      </div>  
            </div>
        );
    }
}
export default Card;