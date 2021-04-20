'use strict';

var { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryInterface.addColumn('doctors', 'num_ratings', {
    //   type: DataTypes.INTEGER,
    // })
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