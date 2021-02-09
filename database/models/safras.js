const { DataTypes } = require("sequelize")

module.exports = database => {

  const Safras = database.define("Safras", {
    id_safra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ref: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data_fim: {
      type: DataTypes.DATE,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    // OTHER OPTIONS
  })

  // Safras.sync({
  //   // alter:true // UPDATE TABLE
  //   //  force: true // DROP TABLE AND CREATE AGAIN
  // })
};
