import React, { Component } from "react";
import axios from "axios";

export default class Nibble extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Nibble"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }

  render() {
    document.title = "Nibble";
    if (this.state.grantAccess)  {
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title-image">
          <img src="../../images/nibble.jpg"  alt="Nibble" />
          </div>
          <div className="meal-title">Nibble</div>
          <div className="meal-text">
            This brief series empowers parents to know which foods to focus on
            to help their children be the healthiest they can be and how to go
            about doing just that. You will learn what the science is saying
            about organic foods, which small daily changes will add up quickly
            to good health and ideas for meals to create each week for
            breakfast, lunch and dinner.
          </div>
          <div className="inst-vids-container">
            <div className="nibble-wrapper">
              <div className="snk-vids">
                <iframe
                  
                  title="Over-fed"
                  src="https://drive.google.com/file/d/1gOxkqlqcTfoZ7vWT9AMAej7pv1tbFX3E/preview" allow="fullscreen"
                />
                <h2>Over-fed and Under-nourished</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  
                  title="Is Organic Better?"
                  src="https://drive.google.com/file/d/10_ZwQBY0Q64pLbvUOG78lYKnxzGdmlNS/preview" allow="fullscreen"/>
                <h2>Is Organic Better?</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  
                  title="Small Changes"
                  src="https://drive.google.com/file/d/1Xj48_cj-BFbOSGMlqzxt4YSmR5cX3X4Y/preview" allow="fullscreen"
                />
                <h2>Small Changes</h2>
              </div>
              <div className="snk-vids">
                <iframe
                  
                  title="Fiber in Every Bite"
                  src="https://drive.google.com/file/d/1D6Qh1JDnEf2wc9qOSBLajxyr2JgAEOSu/preview" allow="fullscreen"
                />
                <h2>Fiber in Every Bite</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <a href="https://www.pcrm.org/news/exam-room-podcast/clear-skin-and-your-diet-acne-wrinkles">
              Clear Skin, Acne & wrinkles
            </a>
            <br />
            <a href="https://www.pcrm.org/news/exam-room-podcast/can-vegan-diet-improve-your-skin">
              Can a Vegan Diet improve your skin?
            </a>
            <br />
            <a href="https://www.medicalnewstoday.com/articles/219601">
              Vitamin B5 & your health
            </a>
            <br />
            <a href="https://organic.org/the-dirty-dozen/">
              Dirty dozen and clean fifteen: The least and most pesticides on
              fruits and vegetables.
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="unauthorized">Unauthorized Access</div>; 
  }
}
}
