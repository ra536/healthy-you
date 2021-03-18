'use strict';

var Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryInterface.addColumn('appointments', 'user_id', {type: Sequelize.UUID})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
