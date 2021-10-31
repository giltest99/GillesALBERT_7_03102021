'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
       {
      id: 1,
      username: 'user1',
      password: '123',
      email: 'user1@example.com',
      avatar: './images/avatar/default_url',
      biography: 'Quelques mots...',
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      username: 'user2',
      password: '123',
      email: 'user2@example.com',
      avatar: './images/avatar/default_url',
      biography: 'Quelques mots...',
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      username: 'user3',
      password: '123',
      email: 'user3@example.com',
      avatar: './images/avatar/default_url',
      biography: 'Quelques mots...',
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
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
