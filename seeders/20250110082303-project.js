'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert sample projects
    await queryInterface.bulkInsert('Project', [
      {
        name: 'Project A',
        description: 'This is Project A',
        ownerId: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project B',
        description: 'This is Project B',
        ownerId: 2,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Project', null, {});
  },
};
