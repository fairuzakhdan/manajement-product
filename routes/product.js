const express = require("express");
const router = express.Router();
const prooduct = require("../controllers/product");

router.route("/createPostProducts").post(prooduct.createProduct);
router.route("/createPostMerk").post(prooduct.createMerk);

router.route("/products").get(prooduct.getProduct);

router
  .route("/products/:id")
  .get(prooduct.getProductById)
  .put(prooduct.updateProductById)
  .delete(prooduct.deleteProductById);

module.exports = router;
