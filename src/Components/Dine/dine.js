import React, { Component } from "react";

export default class Dine extends Component {
  render() {
    document.title = "Dine";
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <img src="../../images/dine.jpg" width="30%" alt="Dine" />
          <div className="meal-title">Dine</div>
          <div className="meal-text">
            The dine series is designed to give you more in-depth information
            about WHY plant-based eating is so effective at creating health. In
            this series you will learn about:
            <br />
            *calorie density <br />
            *food synergy
            <br />
            *how governmental policies affect food choices
            <br />
            *how to be informed about medication you may need to take
            <br />
            *how cheese, dairy, meat and artificial sweeteners affect our health
            and better substitutes for better health.
          </div>
          <div className="inst-vids-container">
            <div className="nibble-wrapper">
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Calorie Density"
                  src="https://drive.google.com/file/d/1olvvlg5j3KxsayVv2SZO4DXFvhQ7uw_8/preview" allow="fullscreen"
                />
                <h2>Calorie Density</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Food Synergy"
                  src="https://drive.google.com/file/d/1KfsFvnytUnaBGbnk9NdLiwwZhSRR2fS6/preview" allow="fullscreen"
                />
                <h2>Food Synergy</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Lobbying"
                  src="https://drive.google.com/file/d/1UvJ-5z1fIPUbhMnj_I1_1seClLRHydWA/preview" allow="fullscreen"
                />
                <h2>Lobbying and Subsidies</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Your Health"
                  src="https://drive.google.com/file/d/1AgpiIHIRPnsbWJ_Chg8ZGUS4Ugc9pgUY/preview" allow="fullscreen"
                />
                <h2>Your Health - Your Responsibility</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="50%"
                  title="Med Benefits"
                  src="https://drive.google.com/file/d/1FY9Zgf5TJ8fdjBrehqVvoowpSpMEadwu/preview" allow="fullscreen"
                />
                <h2>What Benefits are you getting from your meds?</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Calories In Calories Out"
                  src="https://drive.google.com/file/d/1Dkiyj4eJQkn7n-Hr3HPLlXDx0-Fh_-s4/preview" allow="fullscreen"
                />
                <h2>Calories In vs Calories Out</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Protein, Eggs, and Cheese"
                  src="https://drive.google.com/file/d/1RO1SpcEMUiM2j7c_VVP0QW8kVrjMdQkX/preview" allow="fullscreen"
                />
                <h2>Protein, Eggs, & Cheese</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  width="100%"
                  title="Artifical Sweetners"
                  src="https://drive.google.com/file/d/1W4xQG4PJkLxxzshD2k7uDS8XPN1cwHzY/preview" allow="fullscreen"
                />
                <h2>Artificial Sweetners</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <a href="https://www.youtube.com/watch?v=I4frA2df81g">
              Food Synergy
            </a>
            <br />
            <a href="https://nutritionfacts.org/video/eating-more-to-weigh-less/">
              Calorie Density
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=-J7S-dMvJb8">
              Lobbying and food choices
            </a>
            <br />
            <a href="https://www.amazon.com/Cheese-Trap-Breaking-Surprising-Addiction/dp/1455594687">
              The Cheese Trap (book link)
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=mtKIgDN4UAU">
              The Cheese Trap (web video)
            </a>
          </div>
        </div>
      </div>
    );
  }
}
