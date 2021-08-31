const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    blogger_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'blogger',
            key: 'id',
        },
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
});

module.exports = Blogpost;