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
    practice_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    doctor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL
    }
}, {underscored: true});

// doctor.create({practice_id:'d41ba10b-bb8b-4ff2-8c7f-7ef7c818b484', doctor_name:'Bobby', rating: 5.0});
// doctor.create({practice_id:'48711630-63dd-4fab-9dfd-0beed48e2026', doctor_name:'Billy'});

module.exports = doctor;