const Authors = require("../models/authors.model");

module.exports = {
    index: (req, res) => {
        Authors.find()
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    show: (req, res) => {
        Authors.findOne({ _id: req.params._id })
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    create: (req, res) => {
        Authors.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    update: (req, res) => {
        Authors.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    delete: (req, res) => {
        Authors.deleteOne({ _id: req.params._id })
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    }

}



