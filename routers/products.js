const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/:id/", productController.getProduct);

router.get("/", productController.pagination);

module.exports = router;
