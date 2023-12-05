const { Race } = require('../../memoria-the-protectors/models');

const raceData = [
  {
    name: 'Brinx',
    racial_bonus: 'Plus 1 to Charisma',
    racial_negs: 'Minus 2 to Strength',
    racial_ability: 'Flight Focus Ability',
    starting_level: 4,
    hp_bonus: 3,
    starting_jinx: 40,
    attack_prowess: 'D4',
    defense_prowess: 'D12+2',
    image: 'Brinx.JPG',
  },

  {
    name: 'Djinni',
    racial_bonus: 'Plus 2 to Intelligence',
    racial_negs: 'Minus 1 to Strength',
    racial_ability:
      'Restful Lamp - Full rest for self inside of owned lamp in only 1 hour',
    starting_level: 2,
    hp_bonus: 7,
    starting_jinx: 30,
    attack_prowess: 'D12',
    defense_prowess: 'D6',
    image: 'Djinii.JPG',
  },

  {
    name: 'Dwarn',
    racial_bonus: 'Plus 2 to Strength',
    racial_negs: 'Minus 2 to Charimsa',
    racial_ability: 'Darkvision - Can see in the dark',
    starting_level: 3,
    hp_bonus: 7,
    starting_jinx: 40,
    attack_prowess: 'D8',
    defense_prowess: 'D8',
    image: 'Dwarn.jpg',
  },

  {
    name: 'Elv',
    racial_bonus: 'Plus 1 to Reflex',
    racial_negs: 'Minus 1 to Fortitude',
    racial_ability: 'Acrobatics Focus Ability',
    starting_level: 4,
    hp_bonus: 5,
    starting_jinx: 35,
    attack_prowess: 'D6',
    defense_prowess: 'D10',
    image: 'Elves.JPG',
  },

  {
    name: 'Humans',
    racial_bonus: 'Plus 2 to Strength',
    racial_negs: 'Minus 1 to Fortitude',
    racial_ability: 'Additional Weapon Training',
    starting_level: 5,
    hp_bonus: 8,
    starting_jinx: 40,
    attack_prowess: 'D6',
    defense_prowess: 'D10',
    image: 'Humans.jpg',
  },

  {
    name: 'Musculus',
    racial_bonus: 'Plus 2 to Reflex',
    racial_negs: 'Minus 2 to Fortitude',
    racial_ability: 'Vibe Focus Abillity',
    starting_level: 4,
    hp_bonus: 3,
    starting_jinx: 35,
    attack_prowess: 'D6',
    defense_prowess: 'D10',
    image: 'Musculus.JPG',
  },
  {
    name: 'Polkan',
    racial_bonus: 'Plus 1 to Strength',
    racial_negs: 'Minus 3 to Reflex',
    racial_ability: 'Double Take Focus Ability',
    starting_level: 4,
    hp_bonus: 8,
    starting_jinx: 35,
    attack_prowess: 'D10',
    defense_prowess: 'D6',
    image: 'Polkans (2).jpg',
  },

  {
    name: 'Potec',
    racial_bonus: 'Plus 1 to Fortitude',
    racial_negs: 'Minus 2 to Intelligence',
    racial_ability: 'Flight Focus Ability',
    starting_level: 5,
    hp_bonus: 7,
    starting_jinx: 25,
    attack_prowess: 'D6',
    defense_prowess: 'D8',
    image: 'Potec (2).JPG',
  },

  {
    name: 'Ryderz',
    racial_bonus: 'Plus 2 to Reflex Rolls',
    racial_negs: 'Minus 1 to Charisma',
    racial_ability: 'Tame Mount',
    starting_level: 5,
    hp_bonus: 1,
    starting_jinx: 40,
    attack_prowess: 'D6',
    defense_prowess: 'D12',
    image: 'Ryderz.JPG',
  },

  {
    name: 'Skorc',
    racial_bonus: 'Plus 2 to Fortitude',
    racial_negs: 'Minus 2 to Charisma',
    racial_ability: 'Orc Strength +3 to Str Checks',
    starting_level: 3,
    hp_bonus: 7,
    starting_jinx: 30,
    attack_prowess: 'D10',
    defense_prowess: 'D6',
    image: 'Skorc.jpg',
  },

  {
    name: 'Treeton',
    racial_bonus: 'Plus 2 to Fortitude',
    racial_negs: 'Minus 1 to Charisma',
    racial_ability:
      'Rootful Rest - Rest anywhere for only 1 hour as a natural tree',
    starting_level: 3,
    hp_bonus: 7,
    starting_jinx: 30,
    attack_prowess: 'D8',
    defense_prowess: 'D10',
    image: 'Treeton.JPG',
  },

  {
    name: 'Tunkles',
    racial_bonus: 'Plus 5 to Intelligence',
    racial_negs: 'Minus 2 to All Other Stats',
    racial_ability: 'Replicate - Create new tunkle',
    starting_level: 2,
    hp_bonus: 1,
    starting_jinx: 40,
    attack_prowess: 'D4',
    defense_prowess: 'D4',
    image: 'Tunkles.jpeg',
  },

  {
    name: 'Wereman',
    racial_bonus: 'Plus 2 to Strength',
    racial_negs: 'Minus 1 to Charisma',
    racial_ability:
      'Lycan Form - Transform into a wereman with a temp strength bonus of +3',
    starting_level: 4,
    hp_bonus: 7,
    starting_jinx: 30,
    attack_prowess: 'D12',
    defense_prowess: 'D8',
    image: 'Wereman.jpg',
  },
];

const seedRace = () =>
  Race.bulkCreate(raceData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedRace;
