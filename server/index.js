require("dotenv").config(); // loads environment variables from a .env file into process.env

/** ************************************************* */
const express = require("express");
const { PORT } = require("./app/config/keys");

/** ************EXPRESS MIDDLEWARES********* */
const app = express();

const helmet = require("helmet");

app.use(helmet());

/** ***********ROUTES************* */
require("./app/routes")(app);

/** ***STATIC FILES****** */
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client/build")));
  // serve routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
/** ***STATIC FILES****** */

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
