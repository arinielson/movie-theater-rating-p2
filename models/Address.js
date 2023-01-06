const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Address extends Model {}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theatre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Theatre",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Address",
  }
);

module.exports = Address;
