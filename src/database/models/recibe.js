"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recibe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Recibe.belongsToMany(models.Institucion_Ayuda, {
        through: models.Recibe,
        foreignKey: "id_inst_ayuda",
        onDelete: 'CASCADE',
      });

      models.Recibe.belongsToMany(models.Alerta, {
        through: models.Recibe,
        foreignKey: "id_alerta",
        onDelete: 'CASCADE',
      });
    }
  }
  Recibe.init(
    {
      id_recibe: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_inst_ayuda: DataTypes.INTEGER,
      id_alerta: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recibe",
      tableName: "Recibes",
    }
  );
  return Recibe;
};
