"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("writers", "role", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Writer",
    });
    queryInterface.removeColumn("doctors", "doctor_name");
    queryInterface.addColumn("doctors", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use.",
      },
    });
    queryInterface.addColumn("doctors", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.addColumn("doctors", "firstName", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.addColumn("doctors", "lastName", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.addColumn("doctors", "city", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.addColumn("doctors", "state", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.addColumn("doctors", "birthdate", {
      type: Sequelize.DATE,
      allowNull: false,
    });
    queryInterface.addColumn("doctors", "role", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Doctor",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
