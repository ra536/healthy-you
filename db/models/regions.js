const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const regions = db.define(
  "regions",
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

module.exports = regions;