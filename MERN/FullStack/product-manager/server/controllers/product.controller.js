const Products = require("../models/product.model");

module.exports.findAll = (req, res) => {
    Products.find()
        .then(allProducts => res.json( allProducts ))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.findOne = (req, res) => {
    Products.findOne({ _id: req.params._id })
        .then(oneProduct => res.json( oneProduct ))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.create = (req, res) => {
    Products.create(req.body)
        .then(newProduct => res.json( newProduct ))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.updateProduct = (req, res) => {
    Products.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedProduct => res.json( updatedProduct ))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};

module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params._id })
        .then(result => res.json( result ))
        .catch(err => res.json({ message: 'Something went wrong... ', error: err}));
};