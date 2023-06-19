const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
    },
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Carts",
        key: "id",
      },
    },
  });
};
