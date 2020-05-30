const router = require("express").Router();
const smsController = require("../../controllers/sms");
const expressValidate = require("../../helpers/expressValidate");
const validator = require("./validator");

router.get(
  "/call-hero",
  validator.callHero,
  expressValidate,
  smsController.callHero
);

module.exports = router;
