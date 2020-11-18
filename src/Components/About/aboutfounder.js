import React, { Component } from "react";

export default class About extends Component {
  render() {
    document.title = "About Our Founder";
    return (
      <div className="about-main">
        <div className="about-main-title">Kandis Mortensen</div>
        <a href="https://nutritionstudies.org/courses/plant-based-nutrition/" title="Plant-based Nutrition Certificate Badge"><img src="https://nutritionstudies.org/images/graduate-badge.png" width="250" alt="Grad Badge"/></a><br/>
        <section className="about-expect">
          <div className="about-header-box">
            <img
              className="about-image"
              src="../images/coaches/KMsmile.jpg"
              alt="Kandis Mortensen"
            />
          </div>
          <div className="about-main-text">
          Hi! I’m Kandis.  I’m a happily married, busy mother of 4 boys.  I have spent 10+ years studying what the science says about health and nutrition and share what I’ve learned here to help as many people as I can achieve optimum health through proper nutrition and lifestyle choices. Welcome!  I’m so glad you’re here!
          </div>
          <div className="about-expo-features-wrapper">
            <div className="about-expo-feature-box">
              <img
                className="about-image"
                src="../images/coaches/kmfamily.jpg"
                alt="Kandis family"
              />
              <div className="about-sub-title">Why I moved to plant based meals</div>
              <div className="about-sub-text">
              Growing up I didn’t care one bit about what I put into my mouth and my lack of physical activity.  I treated my body like a garbage disposal and never got enough sleep or exercise.  After graduating with a degree in Human Development and Family Studies from the University of Utah, I became a mom and quickly realized that if I wanted to take good care of my kids, I needed to take good care of myself.  Over the years my kids have had their own health issues and I dove into the research to see what I could do to protect myself and my family and to help us thrive.  Everything I’ve learned is laid out in the video series I have created and free information available on this website.  I decided to further my education and in May of 2020 received my plant-based nutrition certification from eCornell under the direction of T. Colin Campbell’s Center for Nutrition Studies.  I am passionate about helping everyone learn about how to heal themselves, their families and communities and the world.   <br/><br/>
             <strong>Why I eat WFPB:</strong> <br/>

In the early 2000’s I began experiencing frightening digestive issues.  These problems caught my attention in a big way because I had recently lost my grandfather to colon cancer and had friends who needed colostomy bags due to their digestive issues.  I knew I needed information about how to heal my body, but was up to my ears in bad information, fads, and misleading studies.  I decided to dig deeper and focus my time on getting information from research physicians only.  PhD’s and MD’s who have spent their lives studying the roles of nutrition and how it affects health.  After 10+ years of looking at solid evidence the path is clear and easy for me: eating plants heals my body.  Eating saturated fat, animal protein and too much processed junk makes me feel awful.  After changing my eating habits and feeling great it’s easy to stick with the foods that heal my body.  This website is dedicated to getting good scientific information to anyone seeking help about how to heal with food.
<br/>
              <br/>

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
