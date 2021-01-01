const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;

const Safra = require('./models/safra');
const {Lote, ItemLote} = require("./models/lotes");
const { Cultura, VarianteCultura } = require("./models/culturas");


mongoose.connect(
    'mongodb+srv://agro-api:QWqw0eN5rgQUgXMq@agro.pqowe.mongodb.net/Agro',
    {
        useNewUrlParser: true
    })

// new VarianteCultura({
//     name: "classe A",
//     id_cultura: "5fef4670b1af9726cbac9819",
//     description: "tamanho: 6-8cm",
//     valor_kg: 2.5
// })
//     .save()
//     .then(result => console.log("saved!:" + result))
//     .catch(err => console.log(err))

// new VarianteCultura({
//     name: "classe B",
//     id_cultura: "5fef4670b1af9726cbac9819",
//     description: "tamanho: 6-8cm",
//     valor_kg: 1.5
// })
//     .save()
//     .then(result => console.log("saved!:" + result))
//     .catch(err => console.log(err))

// new Cultura({
//     name: "Pepino"
// })
//     .save()
//     .then(result => console.log("saved!:" + result))
//     .catch(err => console.log(err))

// new Safra({
//     ref: "01/2021",
// })
//     .save()
//     .then(result => console.log("saved!:" + result))
//     .catch(err => console.log(err))

new Lote({
    id_cultura: "5fef4670b1af9726cbac9819",
    items:[
        {
            id_variante_cultura:"assdasdasdad",
            quantidade: 300,
        }
    ]
})
    .save()
    .then(result => console.log("saved!:" + result))
    .catch(err => console.log(err))

app.listen(8080);