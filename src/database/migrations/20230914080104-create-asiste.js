"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Asistes", {
      id_asiste: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        references: {
          model: "administradors",
          key: "id_administrador",
        },
        onDelete: "CASCADE",
      },
      id_denuncia: {
        type: Sequelize.INTEGER,
        references: {
          model: "denuncias",
          key: "id_denuncia",
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
    await queryInterface.dropTable("Asistes");
  },
};
