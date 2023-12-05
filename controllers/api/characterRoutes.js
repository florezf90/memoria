const router = require("express").Router();
const { Charactersheet } = require("../../models");
const withAuth = require('../../utils/auth');

//creates new character and adds to User table
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("Saving New Character");
    const userData = await Charactersheet.create({
      name: req.body.name,
      race: req.body.race,
      age: req.body.age,
      origin: req.body.origin,
      main_focus: req.body.main_focus,
      HP: req.body.HP,
      level: req.body.level,
      jinx: req.body.jinx,
      user_id: req.session.user_id,
    });

    //TODO make redirect to dashboard after save -- res.status(200).redirect("/login");
    res
      .status(200)
      .json({ message: "character registered successfully!!", userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//gets all characters for user signed in
router.get('/', withAuth, async (req, res) => {
    try {
      console.log('get request to charactersheet');
      const charactersheetData = await Charactersheet.findAll({
        where: {user_id: req.session.user_id}
      });
      const charactersheets = charactersheetData.map((charactersheet) => charactersheet.get({ plain: true }));
      res.render('/*TODO add handlebar view name*/', {
        charactersheets,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
//deletes a particular character
router.delete('/:id', withAuth, async(req,res)=>{
    try{
      id = req.params.id;
      console.log(`delete request to characersheet`);
      Charactersheet.destroy({ where: { id: id, }, })
      .then(res.redirect('/dashboard'))
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;