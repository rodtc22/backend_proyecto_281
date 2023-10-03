'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agregas', {
      id_agrega: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuario_normals",
          key: "id_usuario",
        },
        onDelete: "CASCADE",  
      },
      id_contacto: {
        type: Sequelize.INTEGER,
        references: {
          model: "contactos",
          key: "id_contacto",
        },
        onDelete: "CASCADE", 
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
    await queryInterface.dropTable('Agregas');
  }
};