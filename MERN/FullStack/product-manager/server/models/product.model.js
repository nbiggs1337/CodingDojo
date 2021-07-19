const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required!" ]
    },
    price: {
        type: Number,
        require: [true, "Price is required!"]
    },
    description: {
        type: String, 
        require: [true, "A Description between 5 - 200 characters is required!"],
        minlength: [5, "Description must be between 5 - 200 characters."],
        maxlength: [1000, "Description must be between 5 - 200 characters."]
    }
}, { timestamps: true });

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;