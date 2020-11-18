import React, { Component } from "react";
import axios from "axios";
import Mypurchases from "./mypurchases"


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

    axios.get("/api/memberpurchases").then(purchases => {
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
      maddress,
      mcity,
      mstate,
      mzip,
      mphone,
      memail
    } = member;

    return (
      <div className="member-wrapper">
        <div className="member-details-wrapper">
          <section className="profile-holder">
            <div className="profile-item-holder name">
              {`${mfirstname} ${mlastname}`}
            </div>
            <div className="profile-item-holder ">
              <div className="profile-item-type">Address:</div>
              <div className="profile-item"> {maddress}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">City:</div>
              <div className="profile-item"> {mcity}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">State:</div>
              <div className="profile-item"> {mstate}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">Zip: </div>
              <div className="profile-item">{mzip}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">Phone:</div>
              <div className="profile-item">{mphone}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">email:</div>
              <div className="profile-item"> {memail}</div>
            </div>
          </section>
          <section className="my-purchases-selector">
            <div className="my-purchases-title">Current purchases</div>
            <div className="my-purchases-column-headers">
              <div className="my-purchases-header header-class">Available Classes</div>
            </div>
            <div className="my-purchases-details-wrapper">
              {mypurchases.map(eachpurchase => (
                <Mypurchases
                  key={eachpurchase.purid}
                  purchasetitle={eachpurchase.puritem}
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
