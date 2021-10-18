'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'John DOE',
      password: 'My_secret_password',
      email: 'john.doe@example.com',
      avatar: './images/avatar/default_url',
      biography: 'Quelques mots...',
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
