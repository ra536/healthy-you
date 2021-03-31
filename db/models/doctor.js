const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");
const practice = require("./practice");

const doctor = db.define(
  "doctor",
  {
    doctor_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    doctor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use.",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Doctor",
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    profile_picture: {
      type: DataTypes.TEXT,
    },
    bio: {
      type: DataTypes.STRING,
    },
    specialty: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        is: /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/,
      },
      allowNull: false,
      defaultValue: "111-111-1111",
    },
  },
  { underscored: true }
);

doctor.hasMany(practice, {
  sourceKey: "doctor_id",
  foreignKey: "doctor_id",
});

module.exports = doctor;
