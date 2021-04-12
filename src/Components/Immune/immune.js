import React, { Component } from "react";

export default class Immune extends Component {
  render() {
    document.title = "HealthyU2 | Protect your Health";
    document.description = "foods and habits that help to strengthen our immune system"
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title-image">
          <img src="../../images/immune3.jpg" alt="Immune System"/>
          </div>
          <div className="meal-title">Immune System</div>
          <div className="meal-text">
          In this brief series we will review the foods and habits that help to strengthen our immune system and keep us healthy and balanced--even during times of crisis.  I will also go over foods and habits that do us harm, throw our bodies out of balance and open the doors to illness and chronic disease.  Our daily choices and actions can protect us and heal us!  Here’s to your good health!
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <div className="iframe-holder">
               <iframe width="100%" height="100%"  title="Habits that Weaken" src="https://drive.google.com/file/d/1wupdSBuKEg2Qz2ybR1aC-OOcuUcLTwuz/preview" allow="fullscreen"/> </div><br/>
               <h2>Habits that Weaken our Immune System</h2>
                
              </div>
              <div className="snk-vids">
                <div className="iframe-holder">
                <iframe width="100%" height="100%" title="Habits that Strengthen" src="https://drive.google.com/file/d/1keY2ppWzDzkbHYg0cXHIrKyzmeGseMvA/preview" allow="fullscreen"/>
                </div><br/>
<h2>Habits that Strengthen our Immune System</h2>
                
              </div>
              <div className="snk-vids">
                <div className="iframe-holder">
                <iframe width="100%" height="100%"  title="Foods that Weaken" src="https://drive.google.com/file/d/1X_Ygxi-RKVl-D_sBaipCkwyuyii9gkR4/preview" allow="fullscreen"/> </div><br/>
                <h2>Foods that weaken our Immune System</h2>
               
              </div>
              <div className="snk-vids">
                <div className="iframe-holder">
                <iframe width="100%" height="100%"  title="Foods that Strengthen" src="https://drive.google.com/file/d/1DMDdnIDIwsCY_Y4DNhZR5jFF79UqCXEe/preview" allow="fullscreen"/>
                </div><br/>
                <h2>Foods that strengthen our Immune System</h2>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
