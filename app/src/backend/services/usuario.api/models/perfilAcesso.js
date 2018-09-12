'use strict';
module.exports = (sequelize, DataTypes) => {

  const PerfilAcesso = sequelize.define('PerfilAcesso', {
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    tableName: "perfil_acesso",
    timestamps: false
  });
  PerfilAcesso.associate = function(models) {
    // associations can be defined here
  };

  return PerfilAcesso;
}