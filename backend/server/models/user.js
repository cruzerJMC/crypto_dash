"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = models => {
    User.hasOne(models.Profile, {
      foreignKey: "user_id",
      as: "profile"
    });
    User.belongsToMany(models.Crypto, {
      through: "UserCrypto",
      as: "cryptos",
      foreignKey: "user_id"
    });
  };
  return User;
};
