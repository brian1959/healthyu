import React, { Component } from "react";

export default class Immune extends Component {
  render() {
    document.title = "Immune";
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
               <iframe  title="Habits that Weaken" src="https://drive.google.com/file/d/188zqvmz6F9SVvtA_t5JW7fXFWJUEJ28m/preview" allow="fullscreen"/><h2>Habits that Weaken our Immune System</h2>
                
              </div>
              <div className="snk-vids">
               <iframe  title="Habits that Strengthen" src="https://drive.google.com/file/d/1QhyYiNDGng_p39XC98cDWp6pwlY3sToD/preview" allow="fullscreen"/><h2>Habits that Strengthen our Immune System</h2>
                
              </div>
              <div className="snk-vids">
                <iframe  title="Foods that Weaken" src="https://drive.google.com/file/d/1wFSTM6ctPqeTfYZ_28DqQzacE3GkKckr/preview" allow="fullscreen"/> <h2>Food that weaken our Immune System</h2>
               
              </div>
              <div className="snk-vids">
                <iframe  title="Foods that Strengthen" src="https://drive.google.com/file/d/1Q9evaEf9PLMBTJFpDAqmXmcTQ5PP_ecH/preview" allow="fullscreen"/><h2>Foods that strengthen our Immune System</h2>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
