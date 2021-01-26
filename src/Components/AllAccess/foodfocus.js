import React, { Component } from "react";

export default class Foodfocus extends Component {
  render() {
    document.title = "Food Focus";
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">Food Focus</div>
          <div className="meal-text">
            Find out which foods to focus on depending on your specific needs,
            from athletes to cardiovascular health--certain foods can help us
            heal and perform at our best.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <iframe 
                title="Food Focus"
               src="https://drive.google.com/file/d/1TknIdLt8vJ49pAO9_kZ_gKML9mPO_Vdu/preview" allow="fullscreen" />
                <h2>Make Health a Priority</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
            <h2>Athletes</h2>
            <a href="https://www.brendanbrazier.com">Brendan Brazier</a>
            <br />
            <a href="http://www.scottjurek.com/">Scott Jurek</a>
            <br />
            <a href="https://www.richroll.com/">Rich Roll</a>
            <br />
            <a href="https://www.youtube.com/channel/UCpyhJZhJQWKDdJCR07jPY-Q">
              Simnett Nutrition
            </a>
            <h2>Weight Loss:</h2>
            <a href="https://www.youtube.com/channel/UC9vIrPTF0znhis-gsFB8l8Q">
              Krocks in the Kitchen
            </a>
            <br />
            <a href="https://www.youtube.com/channel/UCOQJr9oAj3iu4ig3r08fm-Q">
              Jaroudi Family
            </a>
            <br />
            <a href="https://www.youtube.com/channel/UCurFC25hDz2n6h8IaGsVOAQ">
              Plantiful Kiki
            </a>
            <br />
            <h2>Michael Greger M.D. FACLM:</h2>
            <a href="https://www.amazon.com/How-Not-Die-Discover-Scientifically/dp/1250066115">
              How not to Die
            </a>
            <br />
            <a href="https://www.amazon.com/How-Not-Diet-Groundbreaking-Permanent/dp/1250199220">
              How not to Diet
            </a>
            <br />
            <h2>Heart Disease:</h2>
            <a href="https://www.amazon.com/Prevent-Reverse-Heart-Disease-Nutrition-Based/dp/1583333002/ref=sr_1_2?crid=15XHZRF5E8ACX&dchild=1&keywords=prevent+and+reverse+heart+disease+by+caldwell+esselstyn&qid=1597272933&s=books&sprefix=preve%2Cstripbooks%2C208&sr=1-2">
              Nutrition Based Heart Disease prevention/reversal
            </a>
            <br />
            <h2>Diabetes:</h2>
            <a href="https://www.amazon.com/Mastering-Diabetes-Revolutionary-Permanently-Prediabetes/dp/059318999X/ref=sr_1_2?crid=1EFR0HMX0L8FL&dchild=1&keywords=mastering+diabetes&qid=1597272960&s=books&sprefix=masteing+%2Cstripbooks%2C212&sr=1-2">
              Mastering/Preventing Diabetes
            </a>
            <br />
            <h2>Your Body in Balance</h2>
            <a href="https://www.amazon.com/Your-Body-Balance-Science-Hormones/dp/1538747421/ref=sr_1_2?crid=3LUNWJ465LOW5&dchild=1&keywords=your+body+in+balance+neal+barnard&qid=1597272983&s=books&sprefix=your+body+in+%2Cstripbooks%2C195&sr=1-27">
              Your Body in Balance: The New Science of Food, Hormones, and
              Healthy
            </a>
          </div>
        </div>
      </div>
    );
  }
}
