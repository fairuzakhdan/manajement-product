const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Merek = sequelize.define(
  "Merek",
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
    Deskripsi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "merek",
    timestamps: false,
  }
);

module.exports = Merek;
