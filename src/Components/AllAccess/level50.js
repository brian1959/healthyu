import React, { Component } from "react";
import axios from "axios";

export default class Level50 extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "50+"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }

  render() {
    document.title = "50+";
    if (this.state.grantAccess)  {
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">50+</div>
          <div className="meal-text">
          This video gives personal guidance on a range of health topics facing those over the age of 50.  Learn more about how following a WFPB lifestyle can help you avoid chronic conditions as you age.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
              <div className="iframe-holder">
                  <iframe width="100%" height="100%"  title="50+" src="https://drive.google.com/file/d/1oRCmZ-lrsbf7jOq5ktAECaJSexoPneky/preview" allow="fullscreen" />
                  </div><br/>
                <h2>Make Health a Priority</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
              <h2>PCOS</h2>
            <a
              href="https://www.youtube.com/watch?v=HcT4K5KkTDE">
              Best Foods for Polycystic Ovary Syndrome (PCOS)
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=VNbnSofLdfw">
              Up to 20% of Women Have PCOS. Can Diet Cure it?
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=4kmKY97M0Ug">
              A Plant-Based Diet Helped Alison with PCOS
            </a>
            <h2>Endometriosis:</h2>
            <a href="https://www.youtube.com/watch?v=0jgggM5w5TU">Endometriosis and a Plant-Based Diet | Katherine's Story</a><br/>
            <h2>Painful periods:</h2>
            <a href="https://www.youtube.com/watch?v=xJrvuhlGcak">Foods That Cause Painful Periods | Neal Barnard, MD</a><br/>
            <h2>Menopause:</h2>
            <a href="https://www.youtube.com/watch?v=8uDc9ILdhxY">How Food Affects Menopause</a>
            <br/>
            <h2>Sexual Health</h2>
            <a href="https://www.youtube.com/watch?v=N1ytuQRR61k&t=4s">Healthy sexual education</a><br/>
            <a href="https://www.youtube.com/watch?v=rxoqdqfAgNg&t=7">Thoughts and helps for discussing pornography</a>
            <a href="https://www.youtube.com/watch?v=MRLxRNOZXls">Eight Dates</a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="unauthorized">Page Reserved for Clients<br/>To view this and other instructive pages, create an account and purchase access to the pages you desire.<br/>  Please visit our <a href="healthyu2.com">home</a> page to learn more.</div>; 
  }
  }
}