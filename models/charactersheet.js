

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Charactersheet extends Model {}

Charactersheet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "race",
        key: "race_id",
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "origin",
        key: "origin_id",
      },
    },
    main_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "focus",
        key: "focus_id",
      },
    },
    HP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jinx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reflex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fortitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "charactersheet",
  }
);

module.exports = Charactersheet;
