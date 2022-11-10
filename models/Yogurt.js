const mongoose = require("mongoose")
const YogurtSchema = mongoose.Schema({
Yogurt_flavours: String,
Yogurt_price: Number,
Yogurt_quantity: Number
})
module.exports = mongoose.model("Yogurt",YogurtSchema)