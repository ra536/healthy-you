const { DataTypes } = require("sequelize");
const db = require("../index");

const category = db.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = category;
