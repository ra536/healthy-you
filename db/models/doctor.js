const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');
const practice = require('./practice');

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
    available_appt: {
        type: DataTypes.ARRAY(DataTypes.DATE),
        defaultValue: []
    }
}, {underscored: true});

// doctor.hasMany(practice, {
//     sourceKey: 'doctor_id',
//     foreignKey: 'doctor_id'
// });

module.exports = doctor;