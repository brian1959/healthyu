import React, { Component } from "react";
import axios from "axios";
import Mypurchases from "./mypuritems"


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: {},
      mypurchases: [],
      selectedpurchases: [],
      purchasetitle: "",
    };
 
  }

  componentDidMount() {
    axios.get("/api/member").then(response => {
      this.setState({ member: response.data[0] });
    });

    axios.get("/api/memberprivs").then(purchases => {
      this.setState({ mypurchases: purchases.data });
  
    });
    
  }


  handleInput(e) {
    const newInfo = { ...this.state.member, [e.target.name]: e.target.value };
    this.setState({ member: newInfo });
  }

  render() {

    const { mypurchases } = this.state;
    const { member } = this.state;
    const {
      mfirstname,
      mlastname,
      memail
    } = member;

    return (
      <div className="member-wrapper">
        <div className="member-details-wrapper">
          <section className="profile-holder">
           <div className="profile-name">
              {`${mfirstname} ${mlastname}`}
            </div>

              <div className="profile-item"> {memail}</div>

          </section>
          <section className="my-purchases-selector">
            <div className="my-purchases-title">Access Purchases</div>


            <div className="my-purchases-details-wrapper">
              {mypurchases.map(eachpurchase => (
                <Mypurchases
                  key={eachpurchase.detailid}
                  mppuritem={eachpurchase.puritem}
                />
              ))}
            </div>
     </section>
        </div>
      </div>
    );
  }
}

export default Profile;
