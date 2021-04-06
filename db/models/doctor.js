const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');
const appointment = require('./appointment');

const doctor = db.define('doctor', {
    doctor_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    // practice_id: {
    //     type: DataTypes.UUID,
    //     allowNull: false
    // },
    doctor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL
    },
    profile_picture: {
        type: DataTypes.TEXT
    },
    bio: {
        type: DataTypes.STRING
    },
    specialty: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            is: /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/
        },
        allowNull: false
    },
}, {underscored: true});

doctor.hasMany(appointment, {
    sourceKey: 'doctor_id',
    foreignKey: 'doctor_id'
});

module.exports = doctor;