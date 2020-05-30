const { Heros: HerosModel } = require("../models");

class Sms {
  callHero(req, res) {
    const hero = HerosModel.get(req.code);
    if (hero) res.send(hero);
    else
      res.status(422).json({
        errors: [{ code: "Invalid Code" }],
      });
  }
}

module.exports = new Sms();
