'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        category: "Doctor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Dentist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Chiropractors",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Acupuncture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Nutritionist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Personal Trainers",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Gym",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Yoga",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Physical Therapy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Rehabilitation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Psychologists",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Nursing Homes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Home Health Care",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Urgent Care",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Audiologists",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Optometrists",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Pharmacy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Cycling",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Hospitals",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Integrative Medicine",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Clinics",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
