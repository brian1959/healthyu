import React, { Component } from "react";

export default class Vegan extends Component {
  render() {
    document.title = "The Lonely Vegan";
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
                   <div className="meal-title">The Lonely Vegan</div>
          <div className="meal-text">
          I created this video to help those of you who are the only plant-based eaters in your home or circle of friends/family.  I am too!  This free video gives you tips about how to foster healthy relationships while changing your eating habits.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <iframe  title="Vegan" src="https://drive.google.com/file/d/1FDA5Vxt0rpTrczuzZMH-mLx2_xx-FGeh/preview"/><h2>Eat Plant Based and Keep your Friends</h2>
                
            
            </div>
          </div>
        </div>
        
        </div>
      </div>
    );
  }
}