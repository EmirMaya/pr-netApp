const { Router } = require("express");
const router = Router();
const cart = require("./CartRoutes");

router.use("/cart", cart);

module.exports = router;
