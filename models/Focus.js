const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Focus extends Model {}

Focus.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autiIncrement: true,
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