import React, { Component} from "react";
import PayPal from '../PayPal';
import axios from "axios";
import PeMealType from './pemealitem';
import styled from 'styled-components';


const Button = styled.button`
  height: 12%;
  width: 10%;
  top: 50%;
  left:50%;
  font-size: 2.6vmin;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 5px 20px;
  border-width: initial;
  background-color: royalblue;
  color: white;
  border-style: shaded
  border-color: darkblue;
  border-image: initial;
  outline: none;
  &:hover {
        background-color: #445b65;
        color: white;
  }

`
export default class Pickyeaters1 extends Component {
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
      checkoutButton: false,
      mypurItems:[],
      purItems:[],
      allmealtypes:[]
    };
  }


  componentDidMount() {
    document.title = "Picky Eaters";

    
    axios.get("/api/accessprivs").then(purchases => {
      this.setState({ mypurItems: purchases.data });
    });

    axios.get("api/pemeal").then(mealtypes => {
      this.setState({allmealtypes:mealtypes.data});
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
        <div className="meal-boxes-container">
          {this.state.allmealtypes.map(mealtype => (
            <PeMealType
              key={mealtype.mtid}
              mealtypeImage={mealtype.mtimage}
              mealtypeName ={mealtype.mtname}
              mealtypeBody={mealtype.mtbody}
              mealtypeTcost={mealtype.mttxtcost}
              mealtypeCost={mealtype.mtcost}
            />
          ))}
        </div>
        <center>
          {this.state.displayMealCost[0]>0 ? ( <div className="payment-button"> 
          {this.state.checkout ? ( <PayPal desc={this.state.purDesc} amnt={this.state.mealAdjTotal} items={this.state.displayMealType}/>):(<Button onClick={()=> {this.handleCheckOut()}}>Purchase</Button>)}   
        </div>):("")}
       
        </center> 
      </div>
    );
  }
}
