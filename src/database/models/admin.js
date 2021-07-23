const sequelize = require("../connection");
const Sequelize = require("sequelize");
const Admin = sequelize.define("admin", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alowNull: false,
        primaryKey: true
    },

    userName: {
        type: Sequelize.STRING,
        alowNull: false,
    },

    password: {
        type: Sequelize.STRING,
        alowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        alowNull: false,
    }
});

Admin.sync({ alter: true });

module.exports = Admin