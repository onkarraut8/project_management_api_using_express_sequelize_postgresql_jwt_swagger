'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('userProject', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',  // Foreign key to Users table
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Project',  // Foreign key to Projects table
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('userProject');
  }
};
