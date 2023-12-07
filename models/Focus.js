const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Focus extends Model {}

Focus.init(
    {
        focus_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        requirements: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'focus',
    }
);

module.exports = Focus;