const { DataTypes } = require("sequelize");
const db = require("../index");

const insurance = db.define("insurance", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  insurance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  popular: {
      type: DataTypes.INTEGER,
      allowNull: false,
  }
});

module.exports = insurance;
