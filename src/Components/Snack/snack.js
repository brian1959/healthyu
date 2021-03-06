import React, { Component } from "react";
import axios from "axios";

export default class Snack extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Snack"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }

  render() {
    document.title = "Snack";
    if (this.state.grantAccess)  {

    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title-image">
          <img src="../../images/snack.jpg" alt="Snack" />
          </div>
          <div className="meal-title">Snack</div>
          <div className="meal-text">
            In this introductory series you will learn about epigenetics: the
            study of how our genetic history affects our health. You will also
            learn why knowing what exactly to eat can be so confusing, which
            doctors are expert research scientists on food and nutrition and
            which foods we should be eating for optimal health. You will then
            learn about your microbiome, which foods injure your body and which
            foods protect it so you can make informed decisions about how to
            feed yourself and your family.
          </div>
          <div className="inst-vids-container">
            <div className="nibble-wrapper">
              <div className="snk-vids">
                <iframe  title="Family Dinner?" src="https://drive.google.com/file/d/1UO2pIJXLBCwPscazFZRgYJtFScPSa7wA/preview" allow="fullscreen"/>
                  <h2>Family History or Family Dinner?</h2>
              </div>
              <div className="snk-vids">
                <iframe  title="What do the studies say?" src="https://drive.google.com/file/d/17k7jdhNUNi6kjh79gTWMlaq66P27Fd11/preview" allow="fullscreen"/>
                 <h2>What Do the Studies Say?</h2> 
                
              </div>
              <div className="snk-vids">
                <iframe  title="What does your Dr Know about Nutrition" src="https://drive.google.com/file/d/1SLRYkYLlNMs4axFE-O7jEmk1I_0FgB2V/preview" allow="fullscreen"/>
                 <h2>What Does Your Doctor Know about Nutrition</h2> 
                
              </div>
              <div className="snk-vids">
                <iframe  title="What does Whole Food Mean" src="https://drive.google.com/file/d/1AMgPckAqZqLINTVSpMbSQ2DSbRjygnPT/preview" allow="fullscreen"/>
                <h2>What does Whole Food Mean</h2>
                              
              </div>
              <div className="snk-vids">
                <iframe  title="Our Microbiomes" src="https://drive.google.com/file/d/1Fm-QC2c8VkHegieaX2MIEssyHKS8QvXC/preview" allow="fullscreen"/>
                 <h2>Our Microbiome</h2>
        
              </div>
              <div className="snk-vids">
                <iframe  title="Dairy and Saturated Fats" src="https://drive.google.com/file/d/1ShQgbJCNL-3BL7KkG7c3yLOxzu6NvWIr/preview" allow="fullscreen"/>
                 <h2>Dairy and Saturated Fats</h2> 
          
              </div>
              <div className="snk-vids">
                <iframe  title="Fiber is our friend" src="https://drive.google.com/file/d/10N6PeG8X59VusU2GqDyxt6abMpcOumRQ/preview" allow="fullscreen"/>
                  <h2>Fiber is Our Friend</h2>
               
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <a href="https://nutritionstudies.org/">
              Colin T. Campbell Center for Nutrition Studies
            </a>
            <br />
            <a href="https://www.pcrm.org/">
              Physician’s Committee for Responsible Medicine
            </a>
            <br />
            <a href="https://nutritionfacts.org/">
              Nutrition Facts from Dr. Michael Greger
            </a>
            <br />
            <a href="https://www.facebook.com/NealBarnardMD/videos/eric-adams-on-reversing-type-2-diabetes/792977064456660/">
              Eric Adams’ story
            </a>
          </div>
          <div className="feast-text">
            I will post updates here that I feel are important:
            <br />
            <br />
            Pamela Popper has been a great resource as a Naturopathic Doctor on
            information about how WFPB eating is beneficial. However, I’ve found
            her information and focus during the COVID-19 pandemic to be
            concerning. Therefore, I recommend sticking to experts in their
            field for needed information about the pandemic, namely Dr. Michael
            Greger, who began his career as an expert in infectious disease and
            pandemic science. He even wrote a book called “How to Survive and
            Pandemic” if you are interested. Read on for the best links to the
            best up-to-date information on the science of plant-based eating.
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="unauthorized">Page Reserved for Clients<br/>To view this and other instructive pages, create an account and purchase access to the pages you desire.<br/>  Please visit our <a href="healthyu2.com">home</a> page to learn more.</div>; 
  }
  }
}
