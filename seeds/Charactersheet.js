const { Charactersheet } = require('../models');
//TODO
const charactersheetData =[
  {
    "id": 1,
    "name": "Tim the wizard",
    "race": "human",
    "age": 23,
    "origin": "memoria",
    "main_focus": "sword",
    "HP": 9000,
    "level": 3,
    "jinx": 1,
    "user_id": 1
  }
]

const seedCharactersheet = ()=> Charactersheet.bulkCreate(charactersheetData);

module.exports = seedCharactersheet;