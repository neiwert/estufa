const fs = require('fs');
const path = require("path");


// send the database variable to all models before importing them, so, the models can be instancied
module.exports = database => {
  fs
    .readdirSync(__dirname)
    .filter(file => ((file.indexOf('.')) !== 0 && (file !== 'index.js') && (file !== 'CRUD.js')))
    .forEach(file => require(path.resolve(__dirname, file))(database))
}