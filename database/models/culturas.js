const { DataTypes } = require("sequelize")

module.exports = database => {

  const Culturas = database.define("Culturas", {
    id_cultura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    nome_cultura: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    // OTHER OPTIONS
  })

  const Variantes = database.define("Variantes", {
    id_variante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    nome_variante: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    un_medida: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "Kg"
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    // OTHER OPTIONS
  })

  // Variantes.sync({
  //  // alter:true // UPDATE TABLE
  //  // force: true // DROP TABLE AND CREATE AGAIN
  // })

  // Culturas.sync({
  //  // alter:true // UPDATE TABLE
  //  // force: true // DROP TABLE AND CREATE AGAIN
  // })
};