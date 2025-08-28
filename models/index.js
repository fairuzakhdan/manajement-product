const { Sequelize } = require("sequelize");
const Product = require("../models/Product");
export const sequelize = new Sequelize({
  dialect: SqliteDialect,
  models: [Product],
});
