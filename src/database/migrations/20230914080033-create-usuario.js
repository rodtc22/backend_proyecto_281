"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Usuarios", {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ci: {
        type: Sequelize.STRING,
        unique: true,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      fecha_nac: {
        type: Sequelize.DATE,
      },
      genero: {
        type: Sequelize.STRING,
      },
      direccion: {
        type: Sequelize.STRING,
      },
      correo: {
        type: Sequelize.STRING,
        unique: true
      },
      telefono: {
        type: Sequelize.STRING,
      },
      nombre_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      contrasenia: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("Usuarios");
  },
};
