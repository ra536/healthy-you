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

module.exports = location;