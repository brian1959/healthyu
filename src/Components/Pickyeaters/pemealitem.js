import React from "react";
import { Checkbox } from "semantic-ui-react";


export default function PeMealType (props){

    return ( 

      <div className="aaMealType">
<Checkbox onClick= {() => props.handleMealType(props.mealtypeName, props.mealtypeCost)}/>
        <div className="aatopic">
          <div className="aatitle">{props.mealtypeName} - {props.mealtypeTcost}</div>
          <div className="aatext">{props.mealtypeBody}</div>
        </div>
      </div>
      )
  

}
