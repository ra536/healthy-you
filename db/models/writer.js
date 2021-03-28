const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');

const writer = db.define('writer', {
    
    writer_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    birthdate: {
        type: DataTypes.DATE,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Writer',
    },
    articles: {
        type: DataTypes.ARRAY(DataTypes.UUID)
    }

}, {underscored: true})

module.exports = writer;