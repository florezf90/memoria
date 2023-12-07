const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Origin extends Model {}

Origin.init(
  {
    origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    weapon_proficiency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_package: {
      type: DataTypes.STRING,
      allowNull: false,
    }
},

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'origin',
  }
);

module.exports = Origin;
