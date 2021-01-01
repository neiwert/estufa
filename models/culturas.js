const mongoose = require("mongoose");

const CulturasSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
});

const VariantesCulturaSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    id_cultura:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    valor_kg:{
        type:Number,
        required: true
    }
});

new mongoose.model("culturas", CulturasSchema);
new mongoose.model("variantesCultura", VariantesCulturaSchema);

module.exports = {
    CulturasSchema,
    Cultura: mongoose.model('culturas'),
    VariantesCulturaSchema,
    VarianteCultura: mongoose.model('variantesCultura'),
}