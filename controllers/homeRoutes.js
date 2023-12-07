const router = require("express").Router();
const { User, Focus, Origin, Race } = require("../models");

router.get("/", async (req, res) => {
    try {
      const focusData = await Focus.findAll();
      const focuses = focusData.map((focus) => focus.get({ plain: true }));

      const originData = await Origin.findAll();
      const origins = originData.map((origin) => origin.get({ plain: true }));

      const raceData = await Race.findAll();
      const races = raceData.map((race) => race.get({ plain: true }));
   
      res.status(200).render("homepage", {
        races,
        origins,
        focuses,
        loggedin: req.session.logged_in,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/",);
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
