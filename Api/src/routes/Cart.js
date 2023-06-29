const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
router.use(express.json());
//ruta para generar un post, o "añadir al carrito"
router.post("/", cartController.addToCart);

module.exports = router;
