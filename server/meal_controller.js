module.exports = {

  addOrderHeader: (req, res) => {
    const db = req.app.get("db");
    const {oid, amount} = req.body
    let { memid } = req.session.user;
    db.add_orderheader(oid, memid, amount)
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
    if (meals[0] === ""){ db.add_orderdetail(oid,idesc)
    }
     else {meals.forEach(item => 
      db.add_orderdetail(oid, item))
   }
  },

  getMemberPrivs: (req, res) => {
    if (req.session.user) {
    const db = req.app.get("db");
    let { memid } = req.session.user;
    db.get_privs_by_memid([memid])
      .then(privs => res.status(200).send(privs))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get privileges"
        });
      })
    } else {
      
    }
  },

  getAccessPrivs: (req, res) => {
    const db = req.app.get("db");
    let { memid } = req.session.user; 
    db.get_priv_item_by_memid([memid])
      .then(privs => res.status(200).send(privs))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get privileges"
        });
      })
  },

  getHomeMealTypes: (req, res) => {
    const db = req.app.get("db");
    db.get_meal_types_home()
      .then(meals => res.status(200).send(meals))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get meal types"
        });
      })
  },
  
  getPickyeaterMealTypes: (req, res) => {
    const db = req.app.get("db"); 
    db.get_meal_types_all()
      .then(meals => res.status(200).send(meals))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get meal types"
        });
      })
  }
}