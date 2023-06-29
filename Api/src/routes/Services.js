//creamos el router
const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");
//establecemos rutas para los servicios
router.get("/", servicesController.getServices);

router.get("/:id", servicesController.getServiceById);

module.exports = router;
