import React from "react";
import { Checkbox } from "semantic-ui-react";

export default function PeMealType (props){


    return ( 
      <div className="aaMealType">
<Checkbox onClick={() => this.handleMealType(props.mealtypeName, props.mealtypeCost)} />
        <div className="aatopic">
          <div className="aatitle">{props.mealtypeName}</div>
          <div className="aatext">{props.mealtypeBody}</div>
        </div>
      </div>
      )
  

}
