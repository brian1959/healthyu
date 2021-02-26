module.exports = {
       
      getCheckAccessPrivs: (req, res) => {
        const db = req.app.get("db");
        let { memid } = req.session.user; 
        const {meal} = req.query
        db.get_check_access(memid, meal)
          .then(privs => res.status(200).send(privs))
          .catch(err => {
            res.status(500).send({
              errorMessage: "Unauthorized to access page"
            });
          })
      },

      getMember: async (req, res) => {
        if (req.session.user) {
          const db = req.app.get("db");
          const { memid } = req.session.user;
          let member = await db.get_member([memid]);
          res.status(200).send(member);
        } else {
          let member = [0];
          res.status(200).send(member);
        }

      },
    };
  