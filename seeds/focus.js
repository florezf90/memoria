const { Focus } = require('../../memoria/models');

const focusData = [
  {
    "title": 'unfocused',
    "requirements": 'test'
  },
  {
    "title": 'light',
    "requirements": 'test'
  },
  {
    "title": 'teleportation',
    "requirements": 'mastery of any focus'
  },
  {
    "title": 'fire',
    "requirements": 'test'
  },
  {
    "title": 'air',
    "requirements": 'test'
  },
  {
    "title": 'mind',
    "requirements": 'test'
  },
  {
    "title": 'body',
    "requirements": 'test'
  },
  {
    "title": 'lightning',
    "requirements": 'test'
  },
  {
    "title": 'health',
    "requirements": 'test'
  },
  {
    "title": 'water',
    "requirements": 'test'
  },
]


const seedFocus = () =>
 Focus.bulkCreate(focusData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedFocus;
