import React, { Component } from "react";
import axios from "axios";

export default class Men extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Men"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }

  render() {
    document.title = "Men";
    if (this.state.grantAccess)  {

    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">Men</div>
          <div className="meal-text">
            In this video, I cover a range of health issues specific to men and
            what the research is saying about how eating a WFPB diet can help
            you avoid chronic conditions and perform at your best.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
              <div className="iframe-holder">
                <iframe width="100%" height="100%" title="Men" src="https://drive.google.com/file/d/1m5lfuyRoJADbe5kVE8xUTWSy0suxQOSn/preview"/> 
                </div><br/>
                <h2>Make Health a Priority</h2>
              </div>
              </div>
           </div>
          </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <a href="https://gamechangersmovie.com/the-film/where-to-watch/">Game Changers documentary</a>
            <br />
            <a href="https://www.youtube.com/watch?v=mQuJxN9uP7w">Erectile Dysfunction</a>
            <br />
            <a href="https://www.youtube.com/watch?v=pAs7U9FoIYs&list=PL5TLzNi5fYd_AVX0Y213N3JG-AfTI_rWj">
              Turmeric Curcumin and Colon Cancer</a><br/>
            <h2>Prostate Cancer Series</h2>
            <a href="https://www.youtube.com/watch?v=mffGLuctKoE&list=PL5TLzNi5fYd8NZETxKFk4Z0Cp6opAPvfN&index=2">
              Part 1
            </a><br/>
            <a href="https://www.youtube.com/watch?v=jnC2OeDVJeM&list=PL5TLzNi5fYd8NZETxKFk4Z0Cp6opAPvfN">
              Part 2
            </a>
            <br />
            <h2>COPD:</h2>
            <a href="https://www.youtube.com/watch?v=1tbGlP1H8lI">
              Preventing COPD with Diet
            </a><br/>
            <a href="https://www.youtube.com/watch?v=8QLIX6KnzcI">
              Treating COPD with Diet
            </a>
            <br />
            <h2>Meat and type II diabetes</h2>
            <a href="https://www.youtube.com/watch?v=6t4tBmbPko8">
              Why Is Meat a Risk Factor for Diabetes?
            </a><br/>
            <a href="https://www.youtube.com/watch?v=AoHvkrcr6EM">
              How to Prevent Blood Sugar and Triglyceride Spikes after Meals
            </a>
            <br />
            <h2>Alzheimer’s</h2>
            <a href="https://www.youtube.com/watch?v=t-noCw4LsY4">How to Prevent Alzheimer’s With Diet</a>
            <br />
            <a href="https://www.youtube.com/watch?v=HtpvsT5vGCg">Cholesterol and Alzheimer’s disease</a>
            <br />
            <h2>Kidney disease</h2>
            <a href="https://www.youtube.com/watch?v=MxAFV6XESkM">Treating Chronic Kidney Disease with Food</a>
            <br />
            <a href="https://www.youtube.com/watch?v=58PBof9oUK8">Which Type of Protein is Better for Our Kidneys?</a>
            <br />
            <a href="https://www.youtube.com/watch?v=SYlREuH_PPI">How Not to Die from Kidney Disease</a><br/>
            <h2>Beets:</h2>
            <a href="https://www.youtube.com/watch?v=RLlDqNu4YlQ">
              Doping with beet juice
            </a>
            <br />
            <h2>Testosterone:</h2>
            <a href="https://www.youtube.com/watch?v=1kuL0TmYI9o">
              Best Foods to Improve Sexual Function
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=lKLFXQ0JO0o">
              Meat and Masculinity
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=5_UdM0RedwI">
              Soy and Manboobs: A Busty Myth?
            </a>
            <br />
            <h2>Circadian rhythm:</h2>
            <a href="https://www.youtube.com/watch?v=erBJuxVR7IE&t=3s">
              Health lies in healthy circadian habits
            </a>
            <br />
            <br />
            <a href="https://happyherbivore.com/2013/06/how-long-to-feel-great-plant-based/">
              How Long Does It Take To Feel Great On A Plant-Based Diet?
            </a>
            <br />
            *Note: If the only way you can get yourself to eat vegetables is
            with some ‘smart balance’ buttery spread or a plant-based vegan
            salad dressing then please use them! But sparingly. A little bit of
            fat goes a long way. Fat is not the enemy. Saturated fat injures
            arteries, but small amounts of healthy fats are necessary. Here in
            American we just go WAY overboard on the fat. We need to relearn the
            correct amount of fats to include daily so we can enjoy them and
            still get the benefits of all the plants we are eating. Here are my
            recommendations: 1 handful of nuts/ day or 2-3T freshly ground nut
            butter (or nut butter with no added ingredients--just nuts and salt)
            1T of salad dressing per meal ½ an avocado per day 1tsp Smart
            Balance on your steamed or roasted veggies per meal 2T freshly
            ground flax
          </div>
        </div>
      </div>
   
    );
  } else {
    return <div className="unauthorized">Page Reserved for Clients<br/>To view this and other instructive pages, create an account and purchase access to the pages you desire.<br/>  Please visit our <a href="healthyu2.com">home</a> page to learn more.</div>; 
  }
  }
}
