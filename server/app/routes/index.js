const smsRoutes = require("./sms");

module.exports = function (app) {
  app.use("/api", smsRoutes);
};
