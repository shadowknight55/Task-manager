import {Sequelize}  from 'sequelize';
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

    console.log("Database::connected",true);

    export default sequelize