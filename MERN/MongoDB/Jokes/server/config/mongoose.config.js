const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/joke", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("....Established a connection to the DB - Jokes ....."))
    .catch(err => console.log("Something went terribly wrong and its not funny....", err))