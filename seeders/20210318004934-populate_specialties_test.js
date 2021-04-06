module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("specialties", [
      {
        specialty: "Adolescent Medicine",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty: "Allergy and Immunology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
