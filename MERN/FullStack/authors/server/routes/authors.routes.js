const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api", AuthorController.index);
    app.get("/api/:_id", AuthorController.show);
    app.post("/api", AuthorController.create);
    app.put("/api/:_id", AuthorController.update);
    app.delete("/api/:_id", AuthorController.delete);
}