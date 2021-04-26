const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const image = db.define(
  "image",
  {
    image_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.TEXT,
    },
  },
  { underscored: true }
);

module.exports = image;