const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    model: String,
    Price: Number,
    quantity: Number,
    properties: String
},{collection:'product'})

module.exports = mongoose.model("Product",productSchema);