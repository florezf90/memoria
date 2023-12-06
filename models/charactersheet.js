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

class Charactersheet extends Model {}

Charactersheet.init({
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
      key: "id",
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
      key: "id",
    },
  },
  main_focus_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "focus",
      key: "id",
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
