const sequelize = require('../connection')

const Sequelize = require('sequelize')

const Bebidas = sequelize.define('bebidas', {
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

    preco: {
        type: Sequelize.STRING,
        alowNull: false,
    }
});

Bebidas.sync({ alter: true });

module.exports = Bebidas