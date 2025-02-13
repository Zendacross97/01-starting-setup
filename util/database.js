const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Tomal@1997', {
    dialect: 'mysql',
    host: 'localhost'
    });

module.exports = sequelize;