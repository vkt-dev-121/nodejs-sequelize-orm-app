'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Learn Node.js',
        description: 'Study Node.js basics and advanced concepts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Build CRUD App',
        description: 'Develop a CRUD application using Node.js and Sequelize',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nodejs ORM Learning',
        description: 'Develop a CRUD application using Node.js and Sequelize',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: 'Node ORM Sequelize',
        description: 'Develop a CRUD application using Node.js and Sequelize',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
