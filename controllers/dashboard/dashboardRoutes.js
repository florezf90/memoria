const router = require("express").Router();
const { Charactersheet, Focus, Race, Origin } = require("../../models");
const withAuth = require('../../utils/auth');

//gets all characters for user signed in
//TODO makde reload page or redirect to dashboard to reflect changes made
router.get('/new-character', withAuth, async (req, res) => {
    try {
      console.log('get request to charactersheet');
      const charactersheetData = await Charactersheet.findAll({
        where: {user_id: req.session.user_id},
        include: [{ model: Origin }, { model: Race }, { model: Focus }],
      });
      const charactersheets = charactersheetData.map((charactersheet) => charactersheet.get({ plain: true }));
      res.render("testchar", {
        charactersheets,
        loggedin: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;