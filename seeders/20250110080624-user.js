'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [
      {
        firstName: 'user1',
        lastName: 'last1',
        email: 'email1@gmail.com',
        password: '$2a$12$kEEahu.YBuy1zLACV3Ei7.0EE0KdraXRcGSnTNICKHVm2eiewn8TS',  //password1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'user2',
        lastName: 'last2',
        email: 'email2@gmail.com',
        password: '$2a$12$kEEahu.YBuy1zLACV3Ei7.0EE0KdraXRcGSnTNICKHVm2eiewn8TS',  //password1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'user3',
        lastName: 'last3',
        email: 'email3@gmail.com',
        password: '$2a$12$kEEahu.YBuy1zLACV3Ei7.0EE0KdraXRcGSnTNICKHVm2eiewn8TS',  //password1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  },
};
