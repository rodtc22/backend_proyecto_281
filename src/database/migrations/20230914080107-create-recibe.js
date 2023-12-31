"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recibes", {
      id_recibe: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_inst_ayuda: {
        type: Sequelize.INTEGER,
        references: {
          model: "institucion_ayudas",
          key: "id_inst_ayuda",
        },
        onDelete: "CASCADE",  
      },
      id_alerta: {
        type: Sequelize.INTEGER,
        references: {
          model: "alertas",
          key: "id_alerta",
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
    await queryInterface.dropTable("Recibes");
  },
};
