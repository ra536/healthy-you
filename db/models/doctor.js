const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');


const doctor = db.define('doctor', {
    doctor_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    doctor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL
    }
}, {underscored: true});

// doctor.create({doctor_name: 'Bobby', rating: 5.0})
// doctor.create({doctor_name: 'doctor one', rating: 2.3})
// doctor.create({doctor_name: 'doctor two', rating: 4.7})
// doctor.create({doctor_name: 'doctor three', rating: 4.8})

module.exports = doctor;
