const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo.routes');
// const sequelize = require('./config/database');
const { Sequelize } = require('sequelize');

const app = express();

app.use(bodyParser.json());
app.use('/api', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDB();
});

function connectToDB(){
    const sequelize = new Sequelize(
      'todo_app_db',
      'root',
      '',
      {
          host: 'localhost',
          port: 3306,
          dialect: 'mysql',
          operatorAliases: false,
          pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idle: 10000,
          }
      }
    );

    sequelize.authenticate()
    .then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log(err);
    });
}
