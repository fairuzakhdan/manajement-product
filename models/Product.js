const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Merek = require("./Merek");

const Product = sequelize.define(
  "Product",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Deskripsi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    merek_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

Product.hasMany(Merek, {
  foreignKey: 'merek_id'
})

Merek.belongsTo(Product)

module.exports = Product;
