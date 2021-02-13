import React from "react";
import { Link } from "react-router-dom";

export default function Mypuritems(props) {


    return(
        <Link to={`/${props.mppuritem}`}>
          <div
            className="my-purchases-details-wrapper"
            onClick={() => this.showMenu()}
          >
        
            {props.mppuritem}
          </div>
        </Link>
    )

   
}

  