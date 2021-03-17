module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('practices', 'doctor_id', Sequelize.UUID);
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
