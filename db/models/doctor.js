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
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            is: /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/
        },
        allowNull: false
    },
}, {underscored: true});

// doctor.hasMany(practice, {
//     sourceKey: 'doctor_id',
//     foreignKey: 'doctor_id'
// });

// doctor.create({practice_id:'d41ba10b-bb8b-4ff2-8c7f-7ef7c818b484', doctor_name:'Bobby', rating: 5.0, bio: 'bobby the dentist', specialty: ['dentist', 'skin doctor']});
// doctor.create({practice_id:'48711630-63dd-4fab-9dfd-0beed48e2026', doctor_name:'Billy', rating: 1.0, bio: 'billy doctor', specialty: ['eye doctor']});

module.exports = doctor;