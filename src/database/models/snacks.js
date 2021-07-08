const sequelize = require('../connection');

const Sequelize = require('sequelize')

const Snacks = sequelize.define('snacks', {

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

    price:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    path:{
        type: Sequelize.STRING,
        
    }
});

Snacks.sync({ alter: true });

module.exports = Snacks