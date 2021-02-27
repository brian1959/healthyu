import React, { Component } from "react";
import axios from "axios";

export default class NutritionCoaching extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          grantAccess:false
         
        };
      }
    
      componentDidMount(){
     
        axios.get("/api/checkaccess",{params:{
          meal: "Nutrition Coaching"}})
          .then(access => {
          this.setState({ grantAccess: access.data[0]?true: false});
        });
      }
render() {
    document.title='Nutrition Coaching';
   
       
      if (this.state.grantAccess)  { 

    return(
      
        <div className="nibble-main">
            Nurtrition Coaching STUFF
        </div>
    )
} else {
    return <div className="unauthorized">Page Reserved for Clients<br/>To view this and other instructive pages, create an account and purchase access to the pages you desire.<br/>  Please visit our <a href="healthyu2.com">home</a> page to learn more.</div>; 
  }
}
}