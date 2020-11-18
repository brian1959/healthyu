module.exports = {

getGuestPrivs: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.get_privs_by_memid(user_id)
      .then(privs => {
        const privsObject = {};
        privs.forEach(priv => (privsObject[priv.puritem] = true));
        res.status(200).send(privsObject);
      })
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get privs"
        });
      });
  },

}