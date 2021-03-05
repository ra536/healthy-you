require("dotenv").config();
const { Sequelize } = require('sequelize');

if (process.env.DATABASE_URL) {
    const sequelize = new Sequelize(process.env.DATABASE_URL)
} else {
    module.exports = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
        host: process.env.PGHOST,
        dialect: 'postgres'
    });
}