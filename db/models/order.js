const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

const order = db.define("order", {
  order_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: {
      args: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  payment_status: {
    type: DataTypes.STRING,
    defaultValue: "PENDING",
    allowNull: false,
  },
  user_approval: {
    type: DataTypes.STRING,
    defaultValue: "false",
    allowNull: false,
  },
  printing_options: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  online_advertising: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  online_type: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  digital_services: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  advertising_duration: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(),
    defaultValue: "IN-PROGRESS",
    allowNull: false,
  },
  web_design_comments: {
    type: DataTypes.TEXT,
  },
  web_hosting_comments: {
    type: DataTypes.TEXT,
  },
  web_design_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  web_hosting_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
  },
  order_number: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: {
      args: true,
    },
  },
});

module.exports = order;
