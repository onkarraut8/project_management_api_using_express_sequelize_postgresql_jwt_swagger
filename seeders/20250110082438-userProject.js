'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Associate users with projects in the UserProjects junction table
    await queryInterface.bulkInsert('userProject', [
      { userId: 1, projectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, projectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, projectId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove user-project associations
    await queryInterface.bulkDelete('userProject', null, {});
  },
};
