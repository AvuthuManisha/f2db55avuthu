const mongoose = require("mongoose")
const YogurtSchema = mongoose.Schema({
Yogurt_flavours: String,
Yogurt_price:{type:Number , min:10},
Yogurt_quantity: {type:Number , min:100}
})
module.exports = mongoose.model("Yogurt",YogurtSchema)