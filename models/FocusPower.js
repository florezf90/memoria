const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FocusPower extends Model {}

FocusPower.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        focus_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'focusCategory',
                key: 'id',
            },
        },
        power: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false, //TODO check this to see if false is correct i just filled in to make work
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'focusPower',
    }
);

module.exports = FocusPower;