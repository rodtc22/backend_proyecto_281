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
          model: "administradors",
          key: "id_administrador",
        },
        onDelete: "CASCADE",
      },
      id_recurso: {
        type: Sequelize.INTEGER,
        references: {
          model: "recursos",
          key: "id_recurso",
        },
        onDelete: "CASCADE",  
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
