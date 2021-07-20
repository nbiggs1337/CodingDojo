const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
//Dont forget 'npm i cors'

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const AllRoutes = require("./server/routes/authors.routes");

AllRoutes(app);

app.listen(8000, () => console.log("Server connection is established on port: 8000"));