const { Origin } = require('../../memoria-the-protectors/models');

const originData = [
  {

    "name:" 'body'{
      type: DataTypes.STRING,
      allowNull: false,
    },'
    level_1_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_2_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_3_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_4_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_5_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_6_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_7_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_8_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_9_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_10_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_11_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_12_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_13_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_14_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_15_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_16_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_17_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_18_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_19_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_20_advantage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weapon_training: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_package: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
];

const seedOrigin = () =>
  Race.bulkCreate(originData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedOrigin;
