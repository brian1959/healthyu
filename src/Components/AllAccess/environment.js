import React, { Component } from "react";
import axios from "axios";

export default class Environment extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Environment"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }
  render() {
    document.title = "Environment";
    if (this.state.grantAccess)  {
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
              <div className="iframe-holder">
                <iframe  width="100%" height="100%"
                title="Environment"
                  src="https://drive.google.com/file/d/1RSVm5VVFNAai4XTZQjwP8wWAZwAwAyJB/preview" allow="fullscreen" />
                  </div><br/>
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
  } else {
    return <div className="unauthorized">Page Reserved for Clients<br/>To view this and other instructive pages, create an account and purchase access to the pages you desire.<br/>  Please visit our <a href="healthyu2.com">home</a> page to learn more.</div>; 
  }
  }
}
