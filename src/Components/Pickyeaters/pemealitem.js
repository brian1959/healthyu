import React, {useState, useEffect} from "react";
import { Checkbox } from "semantic-ui-react";


export default function PeMealType (props){
const [checkitem, setCheckItem] = useState(false)

    return ( 

      <div className="aaMealType">
<Checkbox onClick= {() => {setCheckItem(true)},checkitem[props.mealtypeName, props.mealtypeCost]}/>
        <div className="aatopic">
          <div className="aatitle">{props.mealtypeName} - {props.mealtypeTcost}</div>
          <div className="aatext">{props.mealtypeBody}</div>
        </div>
      </div>
      )
  

}
