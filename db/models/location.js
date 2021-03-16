const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');

const location = db.define('location', {
    location_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    practice_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            is: /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/
        },
        allowNull: false
    }
}, {underscored: true})

//location.create({practice_id: '48711630-63dd-4fab-9dfd-0beed48e2026', address: "HERE", phone:"777-777-7777"});
//location.create({practice_id:'d41ba10b-bb8b-4ff2-8c7f-7ef7c818b484', address:'THERE', phone:'525-252-5225'});

module.exports = location;