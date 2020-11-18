module.exports = {
  addFastPass: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.add_fast_pass(user_id)
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong adding Fast Pass."
        });
      });
  },

  addGoldenTicket: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.add_golden_ticket(user_id)
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong adding Fast Pass."
        });
      });
  },

  addInstantReplay: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.add_instant_replay(user_id)
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong adding Fast Pass."
        });
      });
  },

  addPremiums: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.add_premium(user_id)
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong adding premiums."
        });
      });
  },

  addVip: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = 223;
    db.add_vip(user_id)
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong adding Fast Pass."
        });
      });
  },

  getUserPerks: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.get_perks_by_userid(user_id)
      .then(perks => {
        const perksObject = {};
        perks.forEach(perk => (perksObject[perk.pp_name] = true));
        res.status(200).send(perksObject);
      })
      .catch(err => {
        res.status(500).send({
          errorMessage: "Failed to get perks"
        });
      });
  },

  getLikeCount: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.get_like_counter([user_id])
      .then(count => res.status(200).send(count[0]))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong with the like count. Our engineers have been informed!"
        });
      });
  },

  getLikeMe: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.get_likes([user_id])
      .then(likes => res.status(200).send(likes))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong finding those that like you. Our engineers have been informed!"
        });
      });
  },
  getWhoLikedYou: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    db.get_wl_permission([user_id])
      .then(likes => {
        if (!likes[0]) {
          res.status(200).send({ permission: false });
        } else {
          res.status(200).send({ permission: true });
        }
      })
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong finding those that like you. Our engineers have been informed!"
        });
      });
  },

  getPremiumDetails: (req, res) => {
    const db = req.app.get("db");
    db.get_premiums()
      .then(prices => res.status(200).send(prices))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong getting premium details. Our engineers have been informed!"
        });
      });
  },

  updatePerkUsedDate: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { perkName } = req.body;
    if (perkName === "InstantReplay") {
      db.get_perks_by_userid(user_id).then(perks => {
        const perksObject = {};
        perks.forEach(perk => (perksObject[perk.pp_name] = true));
        res.status(200).send(perksObject);
      });
    } else {
      db.get_perk_to_update([user_id, perkName]).then(perktype => {
        const { perk_id } = perktype[0];
        db.update_perk_used_date(perk_id).then(
          db.get_perks_by_userid(user_id).then(perks => {
            const perksObject = {};
            perks.forEach(perk => (perksObject[perk.pp_name] = true));
            res.status(200).send(perksObject);
          })
        );
      });
    }
  }
};