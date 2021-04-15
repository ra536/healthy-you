"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("doctors", "phone", {
      type: Sequelize.STRING,
      validate: {
        is: /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/,
      },
      allowNull: false,
      defaultValue: "111-111-1111",
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
