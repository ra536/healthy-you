const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');
const location = require('./location');
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
    sum_rating: {
        type: DataTypes.DECIMAL
    },
    website: {
        type: DataTypes.STRING
    },
    social_media: {
        type: DataTypes.STRING
    }
});

// practice.create({practice_id:'d41ba10b-bb8b-4ff2-8c7f-7ef7c818b484', name:'PRACTICE CLINIC', sum_rating:5.0, website:"WEBSITE.COM", social_media:"@SOCIALMEDIA"});
// practice.create({practice_id:'48711630-63dd-4fab-9dfd-0beed48e2026', name:'DENTISTRY', sum_rating:5.0, website:"WEBSITE.COM", social_media:"@SOCIALMEDIA"});


module.exports = practice;

