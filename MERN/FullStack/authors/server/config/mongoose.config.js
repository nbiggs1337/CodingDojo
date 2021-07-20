const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log("...established connection with DB - authors..."))
    .catch(err => console.log("Error: ", err))