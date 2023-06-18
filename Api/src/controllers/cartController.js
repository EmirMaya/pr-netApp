
const addToCart = (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ error: "ProductId is required" });
    }

    // Aquí puedes agregar la lógica para agregar el producto al carrito
    // Por ejemplo, podrías almacenar los productos en un array en memoria
    // o utilizar una base de datos para persistir los datos del carrito

    // Ejemplo de almacenamiento en un array en memoria
    const cart = []; // Aquí puedes utilizar una variable global o algún mecanismo de almacenamiento persistente

    cart.push(productId);

    console.log("Producto agregado al carrito:", productId);
    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    console.error("Error al agregar el producto al carrito:", error);
    res.status(500).json({ error: "Error adding product to cart" });
  }
};

module.exports = { addToCart };
