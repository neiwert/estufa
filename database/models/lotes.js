const { DataTypes } = require("sequelize")

module.exports = database => {

  const Lote = database.define("Lotes", {
    id_lote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_safra: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ref: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_lote: {
      type: DataTypes.DATE,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    // OTHER OPTIONS
  })

  const Itens_lote = database.define("Itens_lote", {
    id_item_lote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_lote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_variante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    id_unidade_producao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_unidade_armazenamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    // OTHER OPTIONS
  })

  // Lote.sync({
  //  // alter:true // UPDATE TABLE
  //  //  force: true // DROP TABLE AND CREATE AGAIN
  // })

  // Itens_lote.sync({
  // alter:true // UPDATE TABLE
  // force: true // DROP TABLE AND CREATE AGAIN
  // })
};