const router = require("express").Router();
const { User } = require("../../models");

//logs in user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.name } });
    //validates that there is a matching user
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }
    //validates that password matches
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    //saves info to session storage (cookies)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logs out user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    //destroys session info (cookies)
    req.session.destroy(() => {
      req.session = null;
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//creates new user and adds to User table
router.post("/", async (req, res) => {
  try {
    console.log("post request to /api/users (registering new user)");
    console.log(req.body);
    const userData = await User.create({
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
      logged_in: (req.session.logged_in = true),
    });

    // res.status(200).json(userData).redirect("/login");
    res
      .status(200)
      .json({ message: "User registered successfully!!", userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
