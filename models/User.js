const { Model } = require('sequelize');
const user = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};
module.exports = user;


// const { Model } = require('sequelize');
// ​
// const user = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'User',
//     timestamps: false,
//   });
//   return User;
// };

// module.exports = user

