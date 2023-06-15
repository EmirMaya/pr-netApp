const { Router } = require("express");
const router = Router();
const cart = require("./Cart");
const services = require("./Services");

router.use("/cart", cart);
router.use("/services", services);

module.exports = router;
