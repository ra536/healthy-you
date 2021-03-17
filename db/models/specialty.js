const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');

const specialty = db.define('specialty', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = specialty;