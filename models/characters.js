// name can create on this
//  race created
// age can create on this
// origin have to create new model
// main focus  created
// HP can create on this
// Level can create on this
// jinx can

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init({
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
  race: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "race",
      key: "name",
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "origin",
      key: "name",
    },
  },
  main_focus: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "focus",
      key: "title",
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
});
