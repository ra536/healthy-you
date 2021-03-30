const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');
const doctor = require('./doctor');

const practice = db.define('practice', {
    practice_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING
    },
    social_media: {
        type: DataTypes.STRING
    },
    fax: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            is: /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/
        },
        allowNull: false
    },
    doctor_id: {
        type: DataTypes.UUID,
        foreignKey: true
    },
});

// practice.belongsTo(doctor, {
//     targetKey: 'doctor_id',
//     foreignKey: 'doctor_id'
// });

module.exports = practice;
