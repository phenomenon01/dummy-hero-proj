const { query, body,validationResult } = require("express-validator");

exports.callHero = [
  query("code")
    .trim()
    .custom((value, { req }) => {
      const v = value.split(" ");
      if (v.length === 2 && v[0] === "0" && v[1].length) {
        req.code = v[1];
        return true;
      }
      throw new Error("Invalid Code");
    }),
];

