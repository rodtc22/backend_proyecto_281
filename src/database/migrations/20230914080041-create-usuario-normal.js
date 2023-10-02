"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Usuario_normals", {
      id_usuario: {
        allowNull: false,
        references: {
          model: "Usuarios",
          key: "id_usuario",
          onDelete: "cascade",
        },
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
          model: "Administradors",
          key: "id_administrador",
          onDelete: "cascade",
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
    
    // Agregar la eliminación en cascada de los registros de usuario normal cuando se elimina un administrador
    await queryInterface.addConstraint("Usuario_normals", {
      fields: ["id_administrador"],
      type: "foreign key",
      name: "Usuario_normals_id_administrador_fkey",
      references: {
        table: "Administradors",
        field: "id_administrador",
        onDelete: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Usuario_normals");
  },
};
