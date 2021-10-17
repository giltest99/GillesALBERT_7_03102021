'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'John DOE',
      password: 'jd_secret_password',
      email: 'john.doe@example.com',
      avatar: 'avatar_link',
      biography: 'Quelques mots !',
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};