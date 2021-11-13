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
      password: '$2b$10$R.pLPayaR3vrE1sTATrzYuUVhzcyZN/lQRnQ3.yi3kZNCFtOEZBIC',
      email: 'user1@gmail.com',
      avatar: './images/avatar/default_url',
      biography: 'Quelques mots...',
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      username: 'user2',
      password: '$2b$10$F/H0m/r.B79//c5al/07QuLXWiDPVBUDouPd7Fmitqc/v1ANfMpOy',
      email: 'user2@gmail.com',
      avatar: './images/avatar/default_url',
      biography: 'Quelques mots...',
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      username: 'user3',
      password: '$2b$10$0amzZaL9E07uzlb7N6OryOS.8NPMDBU7n6eOe9KulC8yWc3EalpDC',
      email: 'user3@gmail.com',
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
