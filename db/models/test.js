const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');

const test = db.define('test', {
    test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = test;