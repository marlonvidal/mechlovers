'use strict';
module.exports = (sequelize, DataTypes) => {

  const Usuario = sequelize.define('Usuario', {
    id_perfil_acesso: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    tableName: "usuario",
    timestamps: false
  });
  Usuario.associate = function(models) {
    let idPerfilAcesso = {
        foreignKey: 'id_perfil_acesso'
    };

    Usuario.hasOne(models.PerfilAcesso, idPerfilAcesso);
  };
  return Usuario;
};