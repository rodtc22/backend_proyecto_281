"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Usuario_normals", {
      id_usuario: {
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id_usuario",
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      estado: {
        type: Sequelize.STRING,
      },
      fecha_registro: {
        type: Sequelize.DATE,
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        references: {
          model: "administradors",
          key: "id_administrador",
        },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Usuario_normals");
  },
};
