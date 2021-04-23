const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const ad = db.define(
  "ad",
  {
    ad_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    ad_image: {
      type: DataTypes.TEXT,
    },
    ad_link: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
  },
  { underscored: true }
);

module.exports = ad;