/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize 
 */
async function up(queryInterface, Sequelize) {
  await queryInterface.createSchema('sqlnode')
  await queryInterface.createDatabase('sqlnode')
  await queryInterface.createTable("users", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  });
}
/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize 
 */
async function down(queryInterface, Sequelize) {

  await queryInterface.dropTable('users');
  
}

module.exports = {
  up,
  down,
}
