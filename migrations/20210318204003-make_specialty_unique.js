"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint("specialties", {
      fields: ["specialty"],
      type: "unique",
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
