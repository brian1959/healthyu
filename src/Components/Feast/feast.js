import React, { Component } from "react";
import wsf13pdf from "../../images/wsf13.pdf";
import fstrecpdf from "../../images/fstrecipes.pdf";
import axios from "axios";

export default class Feast extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Feast"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }
  render() {
    document.title = "Feast";
    if (this.state.grantAccess)  {
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <iframe height="100%"
          title="Feast"  
                    src="https://drive.google.com/file/d/1rHQmYtJQPKdlLoSPZzNRDQOy1RxH-zLb/preview" allow="fullscreen" />
      
          <div className="meal-title">Feast</div>
          <div className="meal-text">
            This 4 week program was created for busy people who are ready to
            give plant-based eating a try so they can get rid of chronic
            disease, balance their hormones, lose weight and feel great! The
            series includes four weeks of informational videos that accompany
            four weeks of meal-prep recipes and how-to videos, so you can cook
            on one day and eat for a week! This is how I currently follow my
            WFPB routine as the only plant-based eater in my home, and how I
            juggle cooking for myself and my family. All the recipes are easy to
            make and easy to customize to your tastes and preferences. Ready to
            eat your way to a healthier you?
            <br/>
            <a href={fstrecpdf}>
              Click to download the recipe plan and shopping list
            </a>
       <br/>
                  <a href={wsf13pdf}>Click to download the Worksheet</a>
 
          </div>
        </div>
        <div className="inst-vids-container">
          <div className="inst-vids-wrapper">
            <div className="week-wrapper">
              <div className="inst-vids">
                <h1>Week 1</h1>
                <br />
                <iframe
                  title="What's the best option"
                  src="https://drive.google.com/file/d/1KAwxMe40HrzIyWmHmDz6iGiTLjr3t0wM/preview" allow="fullscreen"
                />
                <h2>What's the best Option?</h2>
                <br /><br/>
                <iframe

                  title="Grocery Food Tour"
                  src="https://drive.google.com/file/d/1omDfIH3s90f0o8PVQ0ftwSi2jYRbkeow/preview" allow="fullscreen"
                />
                <h2>Grocery Food Tour</h2>
              </div>
              <div className="inst-vids">
                <iframe

                  title="Shift Perspective"
                  src="https://drive.google.com/file/d/1Rh-Fq4JpBiT5hk5gLLBFOdPdq5hgvxLd/preview" allow="fullscreen"
                />
                <h2>Shift Your Perspective </h2>
                <br /><br/>
                <iframe
                  
                  title="Oats"
                  src="https://drive.google.com/file/d/13Rj3M6HAU8fApMIglo9X45BPPSIenc44/preview" allow="fullscreen"
                />
                <h2>Oats</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Let's Explore"
                  src="https://drive.google.com/file/d/1IaVXAXdCSLVKlBG2CdwjADM6GPrigajW/preview" allow="fullscreen"
                />
                <h2>Let's Explore What You Love to Eat</h2>
                <br /><br/>
                <iframe
                  
                  title="Beans"
                  src="https://drive.google.com/file/d/1-STConyxUyumAhb0N9BoUtiLbITZhfLh/preview" allow="fullscreen"
                />
                <h2>Beans, quinoa, cillantro dressing</h2>
                <br />

              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Winning Strategy"
                  src="https://drive.google.com/file/d/1TSYvNpNE7uHS1Alj7ftvNW8GA1xyZua9/preview" allow="fullscreen"
                />
                <h2>Winning Strategy</h2>
                <br /><br/>
                <iframe
                  
                  title="Minestrone"
                  src="https://drive.google.com/file/d/1l4WZl2TS9JVUnUxFhTnqAjNnzruKadgZ/preview" allow="fullscreen"
                />
                <h2>Minestrone/Cashew Parm</h2>
              </div>
            </div>
            <div className="week-wrapper">
              <div className="inst-vids">
                <h1>Week 2</h1>
                <br />
                <iframe
                  
                  title="Got Gas?"
                  src="https://drive.google.com/file/d/1T4tzqmVPIgU7jTG6T4_p_j2K9XY2EO3Z/preview" allow="fullscreen"
                />
                <h2>Got Gas? </h2>
                <br /><br/>
                <iframe
                  
                  title="Pancakes"
                  src="https://drive.google.com/file/d/16TqDmhg95G578uLXTWHXRp49pzQ5KjhC/preview" allow="fullscreen"/>
                <h2>Pancakes/Berry Sauce</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Is Your Food Tasting Bland"
                  src="https://drive.google.com/file/d/126ne2PoL_tZxu9QO5--mOJVDT6cnWUSV/preview" allow="fullscreen"
                />
                <h2>Is Your Food Tasting Bland? </h2>
                <br /><br/>
                <iframe
                  
                  title="Saute"
                  src="https://drive.google.com/file/d/1vrk6GrW7_LbdnDICL2ujKAHdB9WCsqcF/preview" allow="fullscreen"
                />
                <h2>Water Saute and Wraps</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Are you eating enough?"
                  src="https://drive.google.com/file/d/1h5a7YejBxSKFHHep-LF6-sz71hu7QYHU/preview" allow="fullscreen"
                />
                <h2>Are you Eating Enough?</h2>
                <br /><br/>
                <iframe
                  
                  title="Fajita Soup"
                  src="https://drive.google.com/file/d/1JJh2rQtDMfbDQtbjsJko1Rxp3DXJS-E8/preview" allow="fullscreen"
                />
                <h2>Fajita Soup</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="What about the weekend"
                  src="https://drive.google.com/file/d/1h2cnhuX7tpmxeTbaus0oMTICNtG-uBxR/preview" allow="fullscreen"
                />
                <h2>What about the Weekend? </h2>
                <br /><br/>
                <iframe
                  
                  title="Nice Cream"
                  src="https://drive.google.com/file/d/14z2G5JRI3Ytp8O4FDYJH-ai08ZFubbAh/preview" allow="fullscreen"
                />
                <h2>Nice Cream</h2>
              </div>
            </div>
            <div className="week-wrapper">
              <div className="inst-vids">
                <h1>Week 3</h1>
                <br />
                <iframe
                  
                  title="Smoothie Anyone?"
                  src="https://drive.google.com/file/d/1UVM2sxKTAn8LkMpbEMnVLKgEI4_whN1D/preview" allow="fullscreen"
                />
                <h2>Smoothie Anyone?</h2>
                <br /><br/>
                <iframe
                  
                  title="The Smoothie"
                  src="https://drive.google.com/file/d/1wwWYNQoRvh6LTyI989-liikFxyzj03Be/preview" allow="fullscreen"
                />
                <h2>The Smoothie</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="What is your reason why"
                  src="https://drive.google.com/file/d/1d4TnfxXThcuXLP3WxEKRRkStHQmWpIdG/preview" allow="fullscreen"
                />
                <h2>What is Your Reason WHY? </h2>
                <br /><br/>
                <iframe
                  
                  title="Power Bowls"
                  src="https://drive.google.com/file/d/1UF_wvAnQCXdzMDilktlN8ukXaBVWiZ7Z/preview" allow="fullscreen"
                />
                <h2>Power Bowls</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Your Genes"
                  src="https://drive.google.com/file/d/1_my4q1a3W7KYFBoMv7rvAjO_G8GtJLIT/preview" allow="fullscreen"
                />
                <h2>How Do Your Genes Define You?</h2>
                <br /><br/>
                <iframe
                  
                  title="Creamy Vegie Soup"
                  src="https://drive.google.com/file/d/1DVUybESNVxYJ4E47ksnb0gQTZxyoaJri/preview" allow="fullscreen"/>
                <h2>Cream Vegie Soup</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Vitamin B12"
                  src="https://drive.google.com/file/d/1WI707aGRvEWEmDsErpBFVE6HXVYdcCxv/preview" allow="fullscreen"
                />
                <h2>Vitamin B12</h2>
                <br /><br/>
                <iframe
                  
                  title="Fries"
                  src="https://drive.google.com/file/d/1eEZiP0MoOORuzNgYUs3MdlQvCMfLV3N4/preview" allow="fullscreen"
                />
                <h2>Fries</h2>
              </div>
            </div>
            <div className="week-wrapper">
              <div className="inst-vids">
                <h1>Week 4</h1>
                <br />
                <iframe
                  
                  title="Why Movement Matters"
                  src="https://drive.google.com/file/d/1YflG7LdhCzDoViTA1tTa2kCsai-CWCwL/preview" allow="fullscreen"
                />
                <h2>Why Movement Matters!</h2>
                <br /><br/>
                <iframe
                  
                  title="Smoke Tofu Wraps"
                  src="https://drive.google.com/file/d/1biH4TAiRrfX9e4qrIqt-tPi4o2yZVv9f/preview" allow="fullscreen"
                />
                <h2>Smoked Tofu Wraps</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Something New"
                  src="https://drive.google.com/file/d/1eBsZBpvvElKJ8wDAXb7cn5AKY66DHyHk/preview" allow="fullscreen"
                />
                <h2>Explore Something New: Tofu</h2>
                <br /><br/>
                <iframe
                  
                  title="Fried Rice"
                  src="https://drive.google.com/file/d/13K5HxriXPRksfivhFU0cH2KAXORd9q5I/preview" allow="fullscreen"/>
                <h2>Fried Rice</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="Life-long Protection"
                  src="https://drive.google.com/file/d/1vkIkie0YoVob8PN3DK43twoc8BF6CupL/preview" allow="fullscreen"
                />
                <h2>Life-long Protection</h2>
                <br /><br/>
                <iframe
                  
                  title="Stir Fry"
                  src="https://drive.google.com/file/d/1ywY1JQuf6MaJVhp-SfOE9GI8xZh7oLFu/preview" allow="fullscreen"
                />
                <h2>Stir Fry</h2>
              </div>
              <div className="inst-vids">
                <iframe
                  
                  title="You did It!"
                  src="https://drive.google.com/file/d/1iTuRebt_j5A07OrdPHOnh7Su7-2zdn9K/preview" allow="fullscreen"
                />
                <h2>You Did It!</h2>
                <br /><br/>
                <iframe
                  
                  title="Brownie Batter Hummus"
                  src="https://drive.google.com/file/d/1DsmyA04BZKPcms3xDSdTgvTeeTL7kCWY/preview" allow="fullscreen"
                />
                <h2>Brownie Batter Hummus</h2>
              </div>
            </div>
          </div>
          <div className="digdeeper-wrapper">
            <div className="digdeeper-title">Dig a Little Deeper Links</div>
            <div className="digdeeper-text">
              <a href="https://cronometer.com/">
                Cronometer - Track your nutrition, fitness & health data
              </a>
              <br />
              <a href="https://play.google.com/store/apps/details?id=org.nutritionfacts.dailydozen&hl=en_US">
                Daily Dozen App - the healthiest foods and how many servings of
                each we should try to eat
              </a>
              <br />
              <a href="https://happyherbivore.com/2013/06/how-long-to-feel-great-plant-based/">
                How long until you feel great on a plant based diet?
              </a>
              <br />
              <a href="https://www.pcrm.org/news/blog/no-debate-soy-beneficial-health">
                Soy is Beneficial to Health
              </a>
              <br />
              <a href="https://www.fitnessblender.com/">
                Fitness Blender - Free workout videos
              </a>
              <br />
              Some of my favorites from Fitness Blender:
              <br />
              <a href="https://www.youtube.com/watch?v=siIicrZ4gng">
                Total Body Strength Workout
              </a>
              <br />
              <a href="https://www.youtube.com/watch?v=11JXbBBgfWg">
                Brutal Butt & Thigh Workout
              </a>
              <br />
              <div className="feast-text">
                Feel free to reach out and let me know how eating a WFPB diet
                has helped you in your life. If you give me permission, I’d love
                to include your story in our section on stories of healing!
              </div>
            </div>
          </div>
        </div>
      </div>
    );} else {
      return <div className="unauthorized">Unauthorized Access</div>;
    }
  }
}
