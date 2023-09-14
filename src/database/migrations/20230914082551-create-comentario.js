"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comentarios", {
      id_comentario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fecha: {
        type: Sequelize.DATE,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.BOOLEAN,
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        references: {
          model: "Administradors",
          key: "id_administrador",
        },
      },
      id_recurso: {
        type: Sequelize.INTEGER,
        references: {
          model: "Recursos",
          key: "id_recurso",
        },
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id_usuario",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comentarios");
  },
};
