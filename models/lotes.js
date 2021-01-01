const mongoose = require("mongoose");

const itemsLoteSchema = new mongoose.Schema({
    id_variante_cultura: String,
    quantidade: Number,
})

const lotesSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
    id_cultura: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
    },
    items: {
        type: [itemsLoteSchema]
    },
    valor_total: {
        type: Number,
        default: 0,
    }
});

lotesSchema.pre("updateOne", () => {
    this.updated_at = Date.now();
});

new mongoose.model("lotes", lotesSchema);
new mongoose.model("itemsLote", itemsLoteSchema);

module.exports = {
    ItemLote: mongoose.model('itemsLote'),
    Lote: mongoose.model('lotes'),
}