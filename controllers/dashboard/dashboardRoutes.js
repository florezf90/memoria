const router = require("express").Router();
const { Charactersheet } = require("../../models");
const withAuth = require('../../utils/auth');

//gets all characters for user signed in
router.get('/', withAuth, async (req, res) => {
    try {
      console.log('get request to charactersheet');
      const charactersheetData = await Charactersheet.findAll({
        where: {user_id: req.session.user_id}
      });
      const charactersheets = charactersheetData.map((charactersheet) => charactersheet.get({ plain: true }));
      res.render('testchar', {
        charactersheets,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;