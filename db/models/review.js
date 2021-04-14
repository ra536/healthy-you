const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const review = db.define(
  "review",
  {
    review_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    doctor_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    overall_rating: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false,
    },
    bedside_manner: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false,
    },
    wait_time: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false,
    },
    availability: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false,
    },
    full_review: {
      type: DataTypes.TEXT,
    },
    publication_date: {
      type: DataTypes.DATE,
    },
  },
  { underscored: true }
);

module.exports = review;