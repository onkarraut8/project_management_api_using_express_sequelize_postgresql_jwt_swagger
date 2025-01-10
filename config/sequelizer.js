const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'DB_PROJECTT', 
  process.env.DATABASE_USER || 'postgresS',              
  process.env.DATABASE_PASSWORD || 'Onkar@1233',              
  {
    host: process.env.DATABASE_HOST || 'localhost', 
    dialect: 'postgres',
    logging: false,                          
  }
);


sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
