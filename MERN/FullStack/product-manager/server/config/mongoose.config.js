const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log("...established connection with DB - products..."))
    .catch(err => console.log("Error: ", err))