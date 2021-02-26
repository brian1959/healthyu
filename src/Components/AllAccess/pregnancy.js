import React, { Component } from "react";
import axios from "axios";

export default class Pregnancy extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Pregnancy and children"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }

  render() {
    document.title = "Pregnancy and Raising Children";
    if (this.state.grantAccess)  {
   
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
         
          <div className="meal-title">Pregnancy and raising small children</div>
          <div className="meal-text">
            Is eating a WFPB diet safe for pregnant women and small children? In
            this video you’ll learn the details about what the research is
            showing about how to have a healthy pregnancy and how to raise
            healthy kids!
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <iframe   title="Pregnancy" src="https://drive.google.com/file/d/1ZyALiWyEPddNEbJmvvZvt4ytmWJEqyNO/preview"/><h2>Ideal Nutrition for Pregnancy and Children</h2>
                
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <h2>Childrens Health</h2>
            <a href="https://www.youtube.com/watch?v=1hfi7zjiYAw&list=PL5TLzNi5fYd8BZ9szVr_2vnda_TKIhVsp">
              Heart Disease May Start in the Womb
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=7wjx6LYzmVw&list=PL5TLzNi5fYd8JVFkME3W2Ighc5WbNx4Rh">
              Childhood Constipation and Cow’s Milk
            </a>
            <br />
            <a href="https://www.plantbasedpediatrician.com/">
              Plant-Based Pediatrician
            </a>
            <h2>Fresh Feeder:</h2>
            <a href="https://www.amazon.com/Munchkin-Fresh-Food-Feeder-Green/dp/B000GK5XY2/ref=sr_1_9?dchild=1&keywords=fresh+feeder+baby&qid=1597272175&sr=8-9">
              Munchkin Fresh Food Feeder
            </a>
            <br />
            <a href="https://www.amazon.com/Boon-Pulp-Silicone-Feeder-Yellow/dp/B078HPDLXS/ref=sr_1_12?dchild=1&keywords=fresh+feeder+baby&qid=1597272218&sr=8-12">
              Boon Pulp Silicone Feeder
            </a>
            <br />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="unauthorized">Unauthorized Access</div>; 
  }
  }
}
