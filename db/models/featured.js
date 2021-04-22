const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const featured = db.define(
  "featured",
  {
    featured_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { underscored: true }
);

module.exports = featured;