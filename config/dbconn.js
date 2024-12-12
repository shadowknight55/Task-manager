import {Sequelize}  from 'sequelize';
<<<<<<< HEAD
import dotenv from 'dotenv' ;
dotenv.config();
// add sequelize connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT, 
    })
=======
import dotenv from 'dotenv';
dotenv.config();
// add sequelize connection
const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Database user
    process.env.DB_PASSWORD, // Database password
    {
      host: process.env.DB_HOST, // Database host
      dialect: 'mysql', // Use MySQL as the database dialect
      port: process.env.DB_PORT, // Database port
    }
  );
>>>>>>> f75c9455100d065c38fb48b0cb64c19a4f096652
    
    console.log("Database::connected",true);

    export default sequelize