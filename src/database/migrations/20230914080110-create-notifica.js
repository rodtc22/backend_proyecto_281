"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Notificas", {
      id_notifica: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_contacto: {
        type: Sequelize.INTEGER,
        references: {
          model: "contactos",
          key: "id_contacto",
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
    await queryInterface.dropTable("Notificas");
  },
};
