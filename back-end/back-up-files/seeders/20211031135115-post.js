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

    await queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        user_id: 1,
        title: 'Mon titre',
        content: 'Bonjour le monde !',
        attachment: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        user_id: 2,
        title: 'Titre Post 2',
        content: 'Bonjour le monde du post 2!',
        attachment: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        user_id: 1,
        title: 'Titre Post 3',
        content: 'Contenu du post 3!',
        attachment: '',
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
