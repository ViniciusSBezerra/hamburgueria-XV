const sequelize = require('../connection')

const Sequelize = require('sequelize')

const Drinks = sequelize.define('drinks', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        alowNull: false,
    },

    price: {
        type: Sequelize.STRING,
        alowNull: false,
    }
});

Drinks.sync({ alter: true });

module.exports = Drinks