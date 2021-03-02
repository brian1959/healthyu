import React, {useState, useEffect} from "react";
import MealType from './mealitem';
import axios from 'axios'


function Home() {

       document.title = "HealthyU2";
       const [mealtypedata, setMealtypedata] = useState([])
       const [logdin, setLogdin]= useState(false)

       const getHomeMeals=() =>{ axios.get("/api/homemeals").then(response => {setMealtypedata(response.data) });
      };

        const getLoginData = () => {axios.get("/api/member").then(response => {setLogdin(response.data[0]? true:false) });
};
   
       useEffect(() => {
         getHomeMeals()
         getLoginData()
        }, [logdin]);
  
 
    return (
      <div className="landing">
        <div className="landing-hero">
          <div className="landing-herovid">
          <iframe
                 width="95%"
                 height="95%"
                 title="Welcome"
                   src="https://drive.google.com/file/d/1Agkpz2NNJrhbT6ULsSJRxh1ioSS7ZokT/preview?start=1" allow="fullscreen; autoplay" />
          </div>
          <img src="https://nutritionstudies.org/images/graduate-badge.png" width="150" alt="Grad Badge"/>
          <div className="overlay-promo">Eat your way to a better life</div>
          <div className="overlay-promo-text">
            Welcome to the HealthyU2 website! This site was created to help you
            become an expert in your own health. Please refer to the ‘free
            resources’ page for a whole host of information on a variety of
            topics from the best in plant based research. For those of you who
            lead busy lives, I have taken everything I’ve learned from my 12+
            years of studying the science of plant based nutrition and my plant
            based nutrition certification from <strong>eCornell</strong> and have created multiple video
            series’ on every topic imaginable! This main page is for those
            wanting to learn more about the science behind plant based
            nutrition. The ‘Picky Eaters’ page is for individuals seeking
            specific information catered to families, athletes, and those trying
            to prevent or reverse chronic disease or find help for autoimmune or
            hormonal issues. I also have videos specific to men, women, families
            and those over 50. I’m so happy you stopped by! I'm thrilled to help
            you discover life-changing information in small bites!
          </div>
        
        </div>
        <section className="land-meal-type">
          <div className="prep-title">How hungry are you?</div>
          <div className="prep-boxes-container">
  {mealtypedata.map(mealtype => (
    <MealType
    key={mealtype.mtid}
    mealtypeImage={mealtype.mtimage}
    mealtypeName ={mealtype.mtname}
    mealtypeBody={mealtype.mtbody}
    mealtypeTcost={mealtype.mttxtcost}
    mealtypeCost={mealtype.mtcost}
    mealtypeLink={mealtype.mtlinkname}
    loggedIn={logdin}
    />
  ))}
                </div>
        </section>
      </div>
    );
  }

  export default Home