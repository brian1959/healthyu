module.exports = {
  
    getMember: async (req, res) => {
        const db = req.app.get("db");
        const { memid } = req.session.user;
        let member = await db.get_member([memid]);
        res.status(200).send(member);
      },
  
     
  

    };
  