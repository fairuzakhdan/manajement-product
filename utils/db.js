const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("gudang", "postgres", "teapal900", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
