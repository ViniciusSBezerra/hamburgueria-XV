const sequelize = require('../connection');

const Sequelize = require('sequelize')

const Lanches = sequelize.define('lanches', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    preco:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Lanches.sync({ alter: true });

module.exports = Lanches