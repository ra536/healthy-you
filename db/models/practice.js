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
    }
});

// practice.create({practice_id:'d41ba10b-bb8b-4ff2-8c7f-7ef7c818b484', name:'PRACTICE CLINIC', location:'HERE', sum_rating:5.0, website:"WEBSITE.COM", social_media:"@SOCIALMEDIA", fax:'fax', phone:'555-555-5555'});
// practice.create({practice_id:'48711630-63dd-4fab-9dfd-0beed48e2026', name:'DENTISTRY', location:'THERE', sum_rating:5.0, website:"WEBSITE.COM", social_media:"@SOCIALMEDIA", fax:'fax', phone:'777 777 7777'});


module.exports = practice;

