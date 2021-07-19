const Products = require("../models/product.model");

module.exports.findAll = (req, res) => {
    Products.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.findOne = (req, res) => {
    Products.findOne({ _id: req.params._id })
        .then(oneProduct => res.json({ products: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.create = (req, res) => {
    Products.create(req.body)
        .then(newProduct => res.json({ products: newProduct }))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.updateProduct = (req, res) => {
    Products.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedProduct => res.json({ products: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};