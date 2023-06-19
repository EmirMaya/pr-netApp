const services = require("../dbServices");

const getServices = async (req, res) => {
  try {
    await res.json(services);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error getting services" });
  }
};

const getServiceById = async (req, res) => {
  const id = req.params.id;
  try {
    const service = services.find((service) => service.id.toString() === id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error getting service" });
  }
};

module.exports = { getServices, getServiceById };
