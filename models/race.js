const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
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
        racial_bonus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        racial_negs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        starting_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hp_bonus: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        starting_jinx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attack_prowess: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        defense_prowess: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'race',
    }
);

module.exports = Race;