const { FocusPower } = require('../models');

const focusPowerData = [
  {
    focus_id: 'unfocused',
    power: 'Sustenance',
    description: 'No longer requieres eating or drinking',
  },
  {
    focus_id: 'unfocused',
    power: 'First Strike',
    description:
      'Can attack first without initiative. Turn order is then clockwise from your position. If more than one person attempts to enact First Strike the player with the highest Charisma Stat goes first',
  },
  {
    focus_id: 'unfocused',
    power: 'Enhanced Awareness',
    description: '+3 to all Listen and Spot checks',
  },
  {
    focus_id: 'unfocused',
    power: 'Double Down',
    description:
      'Your single weapon in your dominant hand duplicates and extends to your other hand. This gives you the ability to dual wield these weapons without taking untrained penalties.',
  },
  {
    focus_id: 'unfocused',
    power: 'Acrobatics',
    description:
      'Able to perform simple to medium difficulty acrobatic maneuvers without having to perform a chance roll. Does not negate chance rolls others involved in the maneuver/activity may have to roll',
  },
  {
    focus_id: 'unfocused',
    power: 'Holy Harvest',
    description:
      'Can create an instant feast of food on any flat surface once per day per level. +10xp for feeding the poor or hungry.',
  },
  {
    focus_id: 'unfocused',
    power: 'Adrenaline Burst',
    description: '+3 to your Reflex stat for the length of the encounter',
  },
  {
    focus_id: 'unfocused',
    power: 'Arcane Surge',
    description: '+3 to Intelligence Stat for the length of the encounter',
  },
  {
    focus_id: 'unfocused',
    power: 'Giants Bane',
    description: '+3 to Strength Stat for the length of the encounter',
  },
];

const seedfocusPower = () =>
  FocusPower.bulkCreate(focusPowerData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedfocusPower;
