"use strict";
module.exports = (sequelize, DataTypes) => {
  const Crypto = sequelize.define(
    "Crypto",
    {
      crypto_name: DataTypes.STRING,
      ticker: DataTypes.STRING
    },
    {}
  );
  Crypto.associate = models => {
    Role.belongsToMany(models.User, {
      through: "UserCrypto",
      as: "users",
      foreignKey: "crypto_id"
    });
  };
  return Crypto;
};
