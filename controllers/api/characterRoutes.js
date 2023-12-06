const router = require("express").Router();
const { Charactersheet } = require("../../models");
const withAuth = require('../../utils/auth');

//creates new character and adds to User table
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("Saving New Character");
    const userData = await Charactersheet.create({
      name: req.body.name,
      race_id: req.body.race_id,
      age: req.body.age,
      origin_id: req.body.origin_id,
      main_focus_id: req.body.main_focus_id,
      HP: req.body.HP,
      level: req.body.level,
      jinx: req.body.jinx,
      strength: req.body.strength,
      reflex: req.body.reflex,
      fortitude: req.body.fortitude,
      intelligence: req.body.intelligence,
      charisma: req.body.charisma,
      user_id: req.session.user_id,
    });

    res
      .status(200)
      .json({ message: "character registered successfully!!", userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//deletes a particular character
router.delete('/:id', withAuth, async(req,res)=>{
    try{
      id = req.params.id;
      console.log(`delete request to characersheet`);
      const data = Charactersheet.destroy({ where: { id: id, }, });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;