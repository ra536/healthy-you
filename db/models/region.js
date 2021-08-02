const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const region = db.define(
  "region",
  {
	  uuid: {
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true,
      },
	  name: {
		type: DataTypes.STRING,
		allowNull: false,
      },
  },    
  { underscored: true }
);

module.exports = region;