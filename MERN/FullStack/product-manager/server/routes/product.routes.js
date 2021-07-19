const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAll);
    app.get("/api/products/:_id", ProductController.findOne);
    app.post("/api/products/new", ProductController.create);
    app.put("/api/products/update/:_id", ProductController.updateProduct);
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct)
}