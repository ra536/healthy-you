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
    },
    bedside_manner: {
      type: DataTypes.DECIMAL(1, 0),
    },
    wait_time: {
      type: DataTypes.DECIMAL(1, 0),
    },
    availability: {
      type: DataTypes.DECIMAL(1, 0),
    },
    full_review: {
      type: DataTypes.TEXT,
    },
    publication_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  { underscored: true }
);

module.exports = review;