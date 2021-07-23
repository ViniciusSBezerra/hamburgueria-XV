const Sequelize = require("sequelize");

const sequelize = new Sequelize("hamburgueria", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate();

module.exports = sequelize;


