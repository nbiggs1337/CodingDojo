const express = require('express');
const app = express();
const mongoose = require('mongoose');


require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllRoutes = require("./server/routes/jokes.routes");
AllRoutes(app);

app.listen(8000, () => console.log("Server is locked and loaded - JOKES INCOMING! Port: 8000"))