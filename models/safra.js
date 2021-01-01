const mongoose = require("mongoose");

const safraSchema = new mongoose.Schema({
    ref: {
        type: String,
        required: true,
    },
    montante_a:{
        type:Number,
        required:true,
        default:0,
    },
    montante_b:{
        type:Number,
        required:true,
        default:0,
    },
    valor_total:{
        type:Number,
        default: 0,
    }
});

new mongoose.model("safra", safraSchema);

module.exports = mongoose.model('safra');