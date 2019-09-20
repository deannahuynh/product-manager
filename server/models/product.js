const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title field is required"], minlength: [4, "Title must be at least 4 characters"] },
    imgUrl: { type: String, default: "" },
    price: { type: Number, required: [true, "Price field is required"] }
}, { timestamps: true })

mongoose.model("Product", ProductSchema)