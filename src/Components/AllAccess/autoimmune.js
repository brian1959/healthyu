import React, { Component } from "react";
import axios from "axios";

export default class Autoimmune extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Autoimmune"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }


  render() {
    document.title = "Autoimmune";
    if (this.state.grantAccess)  {
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <img src="../../images/immune3.jpg" alt="Autoimmune" />
          <div className="meal-title">Autoimmune</div>
          <div className="meal-text">
            Learn about how what you eat affects autoimmune disorders and how
            changing your eating habits can have a huge impact on how you feel.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <iframe
                title="Autoimmune"
                  src="https://drive.google.com/file/d/1m6NI7aR8lriUnLTQJEHIpIgKL2AkAMls/preview" allow="fullscreen"/>          
                <h2>Autoimmune Disorders</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <h2>Arthritis</h2>
            <a href="https://nutritionfacts.org/audio/getting-arthritis-under-control/">
              Getting Arthritis under Control
            </a>
            <br />
            <h2>Eczema:</h2>
            <a href="https://nutritionfacts.org/video/treating-asthma-and-eczema-with-plant-based-diets/">
              Treating Asthma and Eczema with plant based diets
            </a>
            <br />
            <h2>Fibro:</h2>
            <a href="https://nutritionfacts.org/2013/06/27/plant-based-diets-for-fibromyalgia/">
              Plant based diets for Fibromyalgia
            </a>
            <br />
            <h2>Depression:</h2>
            <a href="https://nutritionfacts.org/2018/04/03/the-best-diet-for-depression/">
              The best diet for Depression
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
