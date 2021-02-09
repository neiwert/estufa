const configs = require("./config/connection.json")
const { Sequelize, DataTypes } = require("sequelize")

const database = new Sequelize(configs.mysql)

require("./models/index")(database)

const validate = async (db) => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

validate(database)

module.exports = { database }