const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database configurations
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: '',
  database: 'todo_app_db',
  // port: 3307
});

// Export the initialized Sequelize instance
module.exports = sequelize;