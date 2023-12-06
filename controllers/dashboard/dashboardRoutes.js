const router = require("express").Router();
const { Charactersheet, Focus, Race, Origin } = require("../../models");
const withAuth = require("../../utils/auth");

// //gets all characters for user signed in TO SEPERATE PAGE
// router.get('/characters', withAuth, async (req, res) => {
//     try {
//       //gets a users created characters
//       console.log("get request to charactersheet");
//       const charactersheetData = await Charactersheet.findAll({
//         where: {user_id: req.session.user_id},
//         include: [{ model: Origin }, { model: Race }, { model: Focus }],
//       });
//       const charactersheets = charactersheetData.map((charactersheet) => charactersheet.get({ plain: true }));
//       console.log(charactersheets);
//       res.status(200).json(charactersheetData).render("testchar", { charactersheets });
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

      //gets info from tables for dropdown menu
router.get('/new-character', withAuth, async (req, res) => {
    try {
        //start for getting characters DELETE IF TRANSFER TO SEPERATE PAGE\/\/\/
        console.log("get request to charactersheet");
        const charactersheetData = await Charactersheet.findAll({
            where: {user_id: req.session.user_id},
            include: [{ model: Origin }, { model: Race }, { model: Focus }],
        });
        const charactersheets = charactersheetData.map((charactersheet) => charactersheet.get({ plain: true }));
        console.log(charactersheets);
        //end getting characters DELETE IF TRANSFER TO SEPERATE PAGE ^^^
        const focusData = await Focus.findAll();
        const focuses = focusData.map((focus) => focus.get({ plain: true }));

        const originData = await Origin.findAll();
        const origins = originData.map((origin) => origin.get({ plain: true }));

        const raceData = await Race.findAll();
        const races = raceData.map((race) => race.get({ plain: true }));
     
        res.status(200).render("testchar", {
        charactersheets,//for getting characters DELETE IF TRANSFER TO SEPERATE PAGE<-
        races,
        origins,
        focuses
        });
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;