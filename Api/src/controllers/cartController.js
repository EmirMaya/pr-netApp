const { Cart } = require("../db");
const dbServices = require("../dbServices");


const addToCart = async (req, res) => {
    const { serviceId } = req.body;
    try {
        const service = dbServices.find((service) => service.id === serviceId);

        if (!service) {
            return res.status(404).json({ error: "Servicio no encontrado" });
        }

        const cartItem = await Cart.create({
            totalPrice: service.price,
            serviceId: service.id,
        });

        return res
            .status(200)
            .json({ message: "Servicio agregado al carrito", cartItem });
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Error al agregar el servicio al carrito" });
    }
};

module.exports = { addToCart };