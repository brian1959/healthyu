import React from "react";
import MealType from './mealitem';
import {mealtypeData} from './productdata';


function Home() {
       document.title = "Healthy U";

 
    return (

      <div className="landing">
        <div className="landing-hero">
          <div className="landing-herovid">
          <iframe
                  title="Welcome"
                   src="https://drive.google.com/file/d/1Agkpz2NNJrhbT6ULsSJRxh1ioSS7ZokT/preview?start=1" allow="fullscreen" />
          </div>
          <a href="https://nutritionstudies.org/courses/plant-based-nutrition/" title="Plant-based Nutrition Certificate Badge"><img src="https://nutritionstudies.org/images/graduate-badge.png" width="150" alt="Grad Badge"/></a>
          <div className="overlay-promo">Eat your way to a better life</div>
          <div className="overlay-promo-text">
            Welcome to the HealthyU2 website! This site was created to help you
            become an expert in your own health. Please refer to the ‘free
            resources’ page for a whole host of information on a variety of
            topics from the best in plant based research. For those of you who
            lead busy lives, I have taken everything I’ve learned from my 12+
            years of studying the science of plant based nutrition and my plant
            based nutrition certification and have created multiple video
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
  {mealtypeData.map(mealtype => (
    <MealType
    key={mealtype.mtid}
    mealtypeImage={mealtype.mtimage}
    mealtypeName ={mealtype.mtname}
    mealtypeBody={mealtype.mtbody}
    mealtypeTcost={mealtype.cost}
    mealtypeCost={mealtype.mtcost}
    />
  ))}
                </div>
        </section>
      </div>
    );
  }

  export default Home