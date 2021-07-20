const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Author name is required!" ],
        minlength: [3, "Author name must be at least 3 characters long!"]
    }
}, { timestamps: true });

const Authors = mongoose.model("Authors", AuthorSchema);

module.exports = Authors;