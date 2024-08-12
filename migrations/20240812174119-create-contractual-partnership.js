'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContractualPartnerships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partner_name: {
        type: Sequelize.STRING
      },
      project_association: {
        type: Sequelize.TEXT
      },
      students_involved: {
        type: Sequelize.TEXT
      },
      PI: {
        type: Sequelize.STRING
      },
      partnership_date: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      picture_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ContractualPartnerships');
  }
};