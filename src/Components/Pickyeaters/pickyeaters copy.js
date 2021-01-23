import React, { Component} from "react";
import { Checkbox } from "semantic-ui-react";
import PayPal from '../PayPal';
import axios from "axios";
export default class PickyeatersOld extends Component {
  constructor(props) {
    super(props)
    

    this.state = {
      displayMealType: [],
      MealType: "",
      displayMealCost: [],
      MealCost: 0,
      MealTotal: 0,
      mealAdjTotal:0,
      checkoutTotal: 0,
      purDesc:"",
      checkout:false,
      mypurItems:[],
      purItems:[]
    };
  }


  componentDidMount() {
    document.title = "Picky Eaters";

    
    axios.get("/api/accessprivs").then(purchases => {
      this.setState({ mypurItems: purchases.data });
    });
  
  }



  handleCheckOut(){
    if(this.state.displayMealType.length > 2){
      this.setState({mealAdjTotal:Number(this.state.MealTotal * 0.8)})
    }else{this.setState({mealAdjTotal:Number(this.state.MealTotal)})}
    this.setState({purDesc:(this.state.displayMealType.toString())})
    this.setState({checkout:true})
  }


  handleMealType(MealType, MealCost) {
    if (this.state.checkout){(this.setState({checkout:false}))}else{}
    if (this.state.displayMealType[0] === "0") {
      this.setState({ displayMealType: [MealType] });
      this.setState({checkout:true})
    } else {
      if (
        this.state.displayMealType[0] === MealType &&
        this.state.displayMealType.length === 1
      ) {
        this.setState({ displayMealType: [] });
        this.setState({checkout:false})
      } else {
        if (this.state.displayMealType.indexOf(MealType) === -1) {
          this.setState({
            displayMealType: [...this.state.displayMealType, MealType],
          });
        } else {
          let modDisplayMealType = this.state.displayMealType.slice();
          modDisplayMealType.splice(modDisplayMealType.indexOf(MealType), 1);
          this.setState({ displayMealType: modDisplayMealType });
        }
      }
    }
    if (this.state.displayMealType[0] === "0") {
      this.setState({ displayMealCost: [MealCost] },{MealTotal:MealCost});
      
    } else {
      if (
        this.state.displayMealType[0] === MealType &&
        this.state.displayMealType.length === 1
      ) {
        this.setState({ displayMealCost: [],MealTotal:0 });
      } else {
        if (this.state.displayMealType.indexOf(MealType) === -1) {
          this.setState({
            displayMealCost: [...this.state.displayMealCost, MealCost],MealTotal:this.state.MealTotal + MealCost
          });

        } else {
          let modDisplayMealCost = this.state.displayMealCost.slice();
          modDisplayMealCost.splice(modDisplayMealCost.indexOf(MealCost), 1);
          this.setState({ displayMealCost: modDisplayMealCost, MealTotal:this.state.MealTotal - MealCost });

        }

      }
    }
  }

  render() {
    console.log("Past Purchases",this.state.mypurItems)
    console.log("meal cost",this.state.mealAdjTotal)
    console.log("meal type",this.state.displayMealType)
    console.log("cost array",this.state.displayMealCost)

    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">
            Picky Eaters
           
          </div>
          <h2> 20% off if you bundle 3 or more topics</h2>
          <div className="meal-text">
            <br />
            Below you will see additional informational videos I have tailored specifically for individuals and families.  These videos are brief and to the point, giving specific information for your personal interests.  You can purchase each individually or bundle and save 20%. You can also bundle videos from my main page here as well.  I’ve tried to make it as easy and pie to get good information on areas specific to you.  Once purchased, you will have access to your videos for life. Enjoy!  
          </div>
        </div>

        <div className="aaMealType">
          <Checkbox
            height="400%"
            onClick={() => this.handleMealType("Autoimmune", 5)}
          />
          <div className="aatopic">
            <div className="aatitle">Autoimmune - $5</div>
            <div className="aatext">
              'Learn about how what you eat affects autoimmune disorders and how
              changing your eating habits can have a huge impact on how you
              feel.'
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Environment", 10)} />
          <div className="aatopic">
            <div className="aatitle">Environment - $10</div>
            <div className="aatext">
              This series is an overview of what the climate research experts
              are saying about how our current lifestyle is impacting our
              environment and changes big and small we can make now to protect
              future generations.
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("foryourfamily", 10)} />
          <div className="aatopic">
            <div className="aatitle">For your Family - $10:</div>
            <div className="aatext">
              This video gives a deeper look into what researchers are saying
              about healthy habits to foster in our homes that will protect
              children and adults alike. Covering sleep, shift work, skin and
              the importance of hormonal balance.
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Foodfocus", 5)} />
          <div className="aatopic">
            <div className="aatitle">Food Focus - $5</div>
            <div className="aatext">
              Find out which foods to focus on depending on your specific needs,
              from athletes to cardiovascular health--certain foods can help us
              heal and perform at our best.
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Pregnancy", 5)} />
          <div className="aatopic">
            <div className="aatitle">Pregnancy and children - $5</div>
            <div className="aatext">
              Is eating a WFPB diet safe for pregnant women and small children?
              In this video you’ll learn the details about what the research is
              showing about how to have a healthy pregnancy and how to raise
              healthy kids!
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("50+", 10)} />
          <div className="aatopic">
            <div className="aatitle">50+ - $10</div>
            <div className="aatext">
              This video gives personal guidance on a range of health topics
              facing those over the age of 50. Learn more about how following a
              WFPB lifestyle can help you avoid chronic conditions as you age.{" "}
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Men", 10)} />
          <div className="aatopic">
            <div className="aatitle">Men - $10</div>
            <div className="aatext">
              In this video, I cover a range of health issues specific to men
              and what the research is saying about how eating a WFPB diet can
              help you avoid chronic conditions and perform at your best.
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Women", 10)} />
          <div className="aatopic">
            <div className="aatitle"> Women - $10 </div>
            <div className="aatext">
              As women, it is so important we make our health a priority so we
              can manage our vast and varied responsibilities. This video
              reviews the whys and hows of doing just that!
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Recipe", 40)} />
          <div className="aatopic">
            <div className="aatitle">
              Meal prep recipes/videos and favorite links - $40
            </div>
            <div className="aatext">
              Includes 16 videos and dozens of recipes as well as links to
              additional recipes
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Nibble", 10)} />
          <div className="aatopic">
            <div className="aatitle">Nibble - $10</div>
            <div className="aatext">
              This brief series empowers parents to know which foods to focus on
              to help their children be the healthiest they can be and how to go
              about doing just that. You will learn what the science is saying
              about organic foods, which small daily changes will add up quickly
              to good health and ideas for meals to create each week for
              breakfast, lunch and dinner.
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Snack", 25)} />
          <div className="aatopic">
            <div className="aatitle">Snack - $25:</div>
            <div className="aatext">
              In this introductory series you will learn about epigenetics: the
              study of how our genetic history affects our health. You will also
              learn why knowing what exactly to eat can be so confusing, which
              doctors are expert research scientists on food and nutrition and
              which foods we should be eating for optimal health. You will then
              learn about your microbiome, which foods injure your body and
              which foods protect it so you can make informed decisions about
              how to feed yourself and your family.
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Dine", 25)} />
          <div className="aatopic">
            <div className="aatitle">Dine - $25:</div>
            <div className="aatext">
              The dine series is designed to give you more in-depth information
              about WHY plant-based eating is so effective at creating health.
              In this series you will learn about:
              <ol>
                <li>*calorie density </li>
                <br />
                <li>*food synergy</li>
                <br />
                <li>*how governmental policies affect food choices</li>
                <br />
                <li>
                  *how to be informed about medication you may need to take
                </li>
                <br />
                <li>
                  *how cheese, dairy, meat and artificial sweeteners affect our
                  health and better substitutes for better health.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Feast", 75)} />
          <div className="aatopic">
            <div className="aatitle">Feast - $75</div>
            <div className="aatext">
              This 4 week program was created for busy people who are ready to
              give plant-based eating a try so they can get rid of chronic
              disease, balance their hormones, lose weight and feel great! The
              series includes four weeks of informational videos that accompany
              four weeks of meal-prep recipes and how-to videos, so you can cook
              on one day and eat for a week! This is how I currently follow my
              WFPB routine as the only plant-based eater in my home, and how I
              juggle cooking for myself and my family. All the recipes are easy
              to make and easy to customize to your tastes and preferences.
              Ready to eat your way to a healthier you?
            </div>
          </div>
        </div>
        <br />
        <div className="aaMealType">
          <Checkbox onClick={() => this.handleMealType("Allaccess", 165)} />
          <div className="aatopic">
            <div className="aatitle">All Access - $165</div>
            <div className="aatext">
              Everything listed above for a significant discount.
            </div>
          </div>
        </div>
        <br />
        <center>
       { this.state.checkout ? ( <PayPal desc={this.state.purDesc} amnt={this.state.mealAdjTotal} items={this.state.displayMealType}/>
        ):(
            <button onClick={()=> {this.handleCheckOut()}}>Purchase</button>
        )       }        
      </center> 
      </div>
    );
  }
}
