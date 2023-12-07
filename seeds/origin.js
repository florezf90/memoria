const { Origin } = require('../models');

const originData = [
  {

    "name": 'Body',
      "level_1_advantage": 'Plus 3 to HP, Plus 1 to Strength',
      "level_2_advantage": 'Iron Fist – Unarmed attacks move from D4-D6 to D8-D10',
      "level_3_advantage": 'Stoneblood – Adds 5HP everytime you level up in addition to standard roll',
      "level_4_advantage": '3 Stat Points',
      "level_5_advantage": 'One with the Sun – Gain temporary 5HP while in Sunlight',
      "level_6_advantage": 'Alignment of Chakra – Align your body repairing up to 3HP per level',
      "level_7_advantage": 'Attack Prowess increased by 1 Die',
      "level_8_advantage": 'Rage – Temporarily increase height by 1.5ft and temporarily adds half Level to Strength',
      "level_9_advantage": 'Defense Prowess increased by 1 Die',
      "level_10_advantage": 'Bloodletter – Adds D6 damage to all successful attack hits',
      "weapon_proficiency": '1h+Shield, Two Handed, or 1H+1H',
      "starting_package": 'Weapon (D10 damage), 2 Healing Potions, 15ft Rope, Torch, Bedroll, 15 copper, 3 days rations, Bottle with Cork (empty), Sting of Beads, Scraps of Leather.  '
  },
  {
       "name": 'Divine',
      "level_1_advantage": 'Plus 1 to HP, Plus 3 to Charisma',
      "level_2_advantage": 'Lullabye bye – Can sing a song that will that will put target to sleep for 1 D4 rounds unless they complete a Fortitude check.  Once per day',
      "level_3_advantage": 'Adds 5HP everytime you level up in addition to standard roll',
      "level_4_advantage": '3 Stat Points',
      "level_5_advantage": 'Beauty in the Black – Gains Temporary 5 HP when fighting in the dark or blinded',
      "level_6_advantage": 'Song of the Healer– Sing a song to heal yourself and allies up to 15 HP',
      "level_7_advantage": 'Defense Prowess increased by 1 Die',
      "level_8_advantage": 'Celebrity – Can replace any Fortitude or Intelligence check with Charisma Stat ',
      "level_9_advantage": 'Attack Prowess increased by 1 Die',
      "level_10_advantage": 'Soldier’s Sonnet – Adds D4 damage to all successful attacks',
           "weapon_proficiency": 'Wand, Range, or Melee',
      "starting_package": 'Weapon (D8 damage), 2 Healing Potions, Bedroll, 73 copper, 2 gold, 12 silver, 8 days rations, musical instrument, Lucky Coin (+1 percentiles)'
  },
  {
       "name": 'Eye',
      "level_1_advantage": 'Plus 3 to HP, Plus 1 to Reflex',
      "level_2_advantage": 'Jam Lock -  You are able to jam any non-military lock for 1 D10 rounds in combat or 1 hour outside of combat',
      "level_3_advantage": 'HawkBlood – Adds 3HP everytime you level up in addition to standard roll',
      "level_4_advantage": '5 Stat Points',
      "level_5_advantage": 'Nature’s Bond – Gain temporary 5HP while fighting in a natural environment',
      "level_6_advantage": 'Healing Waters – Bless water to heal yourself only up to 4HP per level',
      "level_7_advantage": 'Attack Prowess increased by 1 Die',
      "level_8_advantage": 'Hunter’s Eye – Adds plus 1 to all Attack Rolls ',
      "level_9_advantage": 'Defense Prowess increased by 1 Die',
      "level_10_advantage": 'High Velocity – Adds D6 damage to all successful ranged attack hits',
      "weapon_proficiency": 'ranged',
      "starting_package": 'Weapon D12, 3 Healing Potions, 15ft Rope, Bedroll, 45 Copper, 1 Gold, 3 Days rations, Bottle with Cork, string of beads, and scraps of leather'
  },

    {
       "name": 'Mind',
      "level_1_advantage": 'Plus 1 to HP, Plus 1 to Intelligence',
      "level_2_advantage": 'Discern Magic – Can discern what type of magic or spell used on items',
      "level_3_advantage": 'Fate’s Fortune – Doubles all loot rolls',
      "level_4_advantage": '3 Stat Points',
      "level_5_advantage": 'Gem Hardy – Adds Fortitude to all Magic Attack damage',
      "level_6_advantage": 'Casterize – Heal yourself up to 5 HP per level',
      "level_7_advantage": 'Defense Prowess increased by 1 Die',
      "level_8_advantage": 'Doubles all Healing: Powers, Abilities, Magic, Etc cast or used by you',
      "level_9_advantage": 'Attack Prowess increased by 1 Die',
      "level_10_advantage": 'Fey Burn  – Adds D6 damage to all successful magic attack hits',
      "weapon_proficiency": 'Wand or Exotic',
      "starting_package": 'Weapon (D10 damage), 6 Healing Potions, 83 copper and 1 Silver, 3 days rations, Cloak Pin, Hanging Tent, Jinx Potion  '
  },


]


const seedOrigin = () =>
 Origin.bulkCreate(originData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedOrigin;
