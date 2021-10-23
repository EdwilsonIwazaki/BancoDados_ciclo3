'use strict';
const {
  Model, DATEONLY
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    // define association here

    Cliente.hasMany(models.Pedido,);

    // Linha feito pelo professor na aula ao vivo
    // Cliente.hasMany(models.Pedido,{
    //   foreignKey: 'ClienteId' , as: 'pedido'
    // })
  }
  };
  
  Cliente.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    clienteDesde: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};