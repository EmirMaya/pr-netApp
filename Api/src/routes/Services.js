const express = require("express");
const router = express.Router();
const services = require("../dbServices");

router.get("/", (req, res) => {
  try {
    res.json(services);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error getting services" });
  }
});

router.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const service = services.find((service) => service.id === id);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error getting service" });
  }
});

module.exports = router;
