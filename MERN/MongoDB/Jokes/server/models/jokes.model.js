const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;