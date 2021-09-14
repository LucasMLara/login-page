/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize 
 */
 async function up(queryInterface, Sequelize) {
  await queryInterface.createSchema('sqlnode')
  await queryInterface.createDatabase('sqlnode')
 }
/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize 
 */
async function down(queryInterface, Sequelize) {

  // await queryInterface.dropTable('users');
  
}

module.exports = {
  up,
  down,
}
