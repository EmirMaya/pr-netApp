const { Router } = require("express");
const router = Router();
const cart = require("./Cart");
const services = require("./Services");
const contact = require("./Contact");

router.use("/cart", cart);
router.use("/services", services);
router.use("/contact", contact);

module.exports = router;
