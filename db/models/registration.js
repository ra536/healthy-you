const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index');

const practiceUser = db.define('practiceUser', {
    practiceID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    practiceName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    practiceUserName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    practicePassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    practiceDoctors: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
});

const location = db.define('location', {
    PID: {
        type: Sequelize.UUID,
        foreignKey: true, 
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    userPhone: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = practiceUser, location;
