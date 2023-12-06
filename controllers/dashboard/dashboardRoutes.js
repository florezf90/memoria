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
      console.log(charactersheets);


      const focusData = await Focus.findAll();
      const focuses = focusData.map((focus) => focus.get({ plain: true }));

      const originData = await Origin.findAll();
      const origins = originData.map((origin) => origin.get({ plain: true }));

      const raceData = await Race.findAll();
      const races = raceData.map((race) => race.get({ plain: true }));



      res.render('testchar', {
        charactersheets,
        races,
        origins,
        focuses
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;