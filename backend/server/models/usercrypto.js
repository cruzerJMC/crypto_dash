'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserCrypto = sequelize.define('UserCrypto', {
    user_id: DataTypes.INTEGER,
    crypto_id: DataTypes.INTEGER
  }, {});
  UserCrypto.associate = function(models) {
    // associations can be defined here
  };
  return UserCrypto;
};