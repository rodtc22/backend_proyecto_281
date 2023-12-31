'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Denuncias', {
      id_denuncia: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_victima: {
        type: Sequelize.STRING
      },
      nombre_agresor: {
        type: Sequelize.STRING
      },
      tipo_violencia: {
        type: Sequelize.STRING
      },
      tipo_denuncia: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      descripcion: {
        type: Sequelize.STRING
      },
      pruebas: {
        type: Sequelize.STRING
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuario_normals",
          key: "id_usuario",
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
    await queryInterface.dropTable('Denuncias');
  }
};