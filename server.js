//pulling in dependancies
require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
//creates express instance
const app = express();
//sets port
const PORT = process.env.PORT || 3001;
//adds helpers to handlebars from (./utils/helpers)
const hbs = exphbs.create({ helpers });
//creates session(cookie)
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//uses cookie
app.use(session(sess));
//sets handlebars as express view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
//other express variables
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
//sync database then start app
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
