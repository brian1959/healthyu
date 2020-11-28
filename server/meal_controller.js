module.exports = {

  addOrderHeader: (req, res) => {
    const db = req.app.get("db");
    const {oid, amount} = req.body
    const { user_id } = 10;
    db.add_orderheader(oid, 10, amount)
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong adding Order Header."
        });
      });
  },

  addOrderDetail:async (req, res) => {
    const db = req.app.get("db");
    const {meals, oid, idesc} = req.body
    console.log('meals', meals)
    console.log("Order Number", oid)
    if (meals[0] === ""){ db.add_orderdetail(oid,idesc)
    }
     else {meals.forEach(item => 
      db.add_orderdetail(oid, item))
   }
  },

  getMemberPrivs: (req, res) => {
    const db = req.app.get("db");
    // let { user_id } = req.session.user;
    db.get_privs_by_memid([1])
      .then(privs => res.status(200).send(privs))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get privileges"
        });
      })
  }
}