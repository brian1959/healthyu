import React, { Component } from "react";

export default class Environment extends Component {
  render() {
    document.title = "Environment";
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">Environment</div>
          <div className="meal-text">
            This series is an overview of what the climate research experts are
            saying about how our current lifestyle is impacting our environment
            and changes big and small we can make now to protect future
            generations.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <iframe height="100%" 
                title="Environment"
                  src="https://drive.google.com/file/d/1RSVm5VVFNAai4XTZQjwP8wWAZwAwAyJB/preview" allow="fullscreen" />
                <h2>Make Health a Priority</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <h2>Bruce Monger PhD:</h2>
            <a href="https://nutritionstudies.org/impact-of-food-choices-on-the-environment/">
              Impact of food choices on the environment
            </a>

            <h2>Jonathan Latham PhD:</h2>
            <a href="https://nutritionstudies.org/gmo-dangers-facts-you-need-to-know/">
              GMO Dangers
            </a>
            <br />
            <h2>Howard Lyman, The Mad Cowboy:</h2>
            <a href="https://nutritionstudies.org/nature-does-not-negotiate/">
              Nature does not Negotiate
            </a>
            <br />
            <h2>Allison Wilson PhD:</h2>
            <a href="https://www.youtube.com/watch?v=5ZfxDuhAZ68">
              How GMO's are made
            </a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
