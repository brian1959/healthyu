import react, {Component} from "react";
import "./header.css";
import logo from "../../images/hu2logo.png";
import tagline from "../../images/tagline.png";

class Header extends Component {

    render(){

        return (
            <div>
             <img className="c-logo" src={logo} alt="logo" />   
             <img className="c-tag" src={tagline} alt="tag line" /> 

            </div>
        )
    }
}