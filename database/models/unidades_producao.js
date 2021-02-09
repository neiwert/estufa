const { DataTypes } = require("sequelize")

module.exports = database => {

    const Unidades_producao = database.define("Unidades_producao", {
        id_unidade_producao: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ref: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        capacidade: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    }, {
        // OTHER OPTIONS
        freezeTableName: true,
    })

    // Unidades_producao.sync({
    //   // alter:true // UPDATE TABLE
    //   //   force: true // DROP TABLE AND CREATE AGAIN
    // })
};
