const { Charactersheet } = require('../models');
const charactersheetData =[
  {
    "id": 1,
    "name": "Tim the wizard",
    "race_id": 1,
    "age": 23,
    "origin_id": 1,
    "main_focus_id": 1,
    "HP": 9000,
    "level": 3,
    "jinx": 1,
    "user_id": 1,
    "strength": 5,
    "reflex": 5,
    "fortitude": 5,
    "intelligence": 5,
    "charisma": 5,
  }
]

const seedCharactersheet = ()=> Charactersheet.bulkCreate(charactersheetData);

module.exports = seedCharactersheet;