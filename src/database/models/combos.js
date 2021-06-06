const sequelize = require('../connection');

const Sequelize = require('sequelize')

const Combos = sequelize.define('combos', {

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

    lanche:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    batata:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    bebida:{
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

Combos.sync({ alter: true });

module.exports = Combos