'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert sample tasks for Project A and Project B
    await queryInterface.bulkInsert('Task', [
      {
        title: 'Task 1 for Project A',
        description: 'This is the first task for Project A.',
        status: 'To Do',
        projectId: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 2 for Project A',
        description: 'This is the second task for Project A.',
        status: 'In Progress',
        projectId: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 1 for Project B',
        description: 'This is the first task for Project B.',
        status: 'Done',
        projectId: 2,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Task', null, {});
  },
};
