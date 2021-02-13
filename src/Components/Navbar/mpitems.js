import React from "react";
import { Link } from "react-router-dom";

export default function Mpitems(props){

    return(
        <div>
<Link to={`/${props.mpLink}`}>
                <div  className="navbar-column-link"  >
                 {props.mpName}
                </div>
              </Link>
        </div>
    )
}