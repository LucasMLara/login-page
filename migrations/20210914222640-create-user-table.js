/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize 
 */
async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Users", {
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

  await queryInterface.dropTable('Users');
  
}

module.exports = {
  up,
  down,
}
