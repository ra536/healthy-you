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
    // doctor_name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Email address already in use.'
        }
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
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Doctor',
    },
    rating: {
        type: DataTypes.DECIMAL
    },
    profile_picture: {
        type: DataTypes.STRING
    },
    bio: {
        type: DataTypes.STRING
    },
    specialty: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
}, {underscored: true});

// doctor.hasMany(practice, {
//     sourceKey: 'doctor_id',
//     foreignKey: 'doctor_id'
// });

// doctor.create({practice_id:'d41ba10b-bb8b-4ff2-8c7f-7ef7c818b484', doctor_name:'Bobby', rating: 5.0, bio: 'bobby the dentist', specialty: ['dentist', 'skin doctor']});
// doctor.create({practice_id:'48711630-63dd-4fab-9dfd-0beed48e2026', doctor_name:'Billy', rating: 1.0, bio: 'billy doctor', specialty: ['eye doctor']});

module.exports = doctor;