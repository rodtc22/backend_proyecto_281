"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asiste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Asiste.belongsToMany(models.Administrador, {
        through: models.Asiste,
        foreignKey: "id_administrador",
        onDelete: 'CASCADE'
      });
      models.Asiste.belongsToMany(models.Denuncia, {
        through: models.Asiste,
        foreignKey: "id_denuncia",
        onDelete: 'CASCADE'
      });
    }
  }
  Asiste.init(
    {
      id_asiste: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_administrador: DataTypes.INTEGER,
      id_denuncia: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Asiste",
      tableName: "Asistes",
    }
  );
  return Asiste;
};
