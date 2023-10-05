"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Alerta.belongsTo(models.Usuario_normal, {
        foreignKey: "id_usuario",
        onUpdate: 'CASCADE',
      });
      
      models.Alerta.belongsToMany(models.Contacto, {
        through: models.Notifica,
        foreignKey: "id_alerta",
        onDelete: 'CASCADE',
      });

      models.Alerta.belongsToMany(models.Institucion_Ayuda, {
        through: models.Recibe,
        foreignKey: "id_alerta",
        onDelete: 'CASCADE',
      });
    }
  }
  Alerta.init(
    {
      id_alerta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fecha: DataTypes.DATE,
      hora: DataTypes.DATE,
      ubicacion: DataTypes.STRING,
      descripcion_incidente: DataTypes.STRING,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Alerta",
      tableName: "Alertas",
    }
  );
  return Alerta;
};
