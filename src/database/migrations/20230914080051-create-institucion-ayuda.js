'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Institucion_Ayudas', {
      id_inst_ayuda: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_institucion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      id_administrador: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Institucion_Ayudas');
  }
};