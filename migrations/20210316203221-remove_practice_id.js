module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('doctors', 'practice_id');
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
