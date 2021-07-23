const sequelize = require("../connection");

const Sequelize = require("sequelize");

const Combos = sequelize.define("combos", {

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

    snack:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    potato:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    drink:{
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
    }
});

Combos.sync({ alter: true });

module.exports = Combos