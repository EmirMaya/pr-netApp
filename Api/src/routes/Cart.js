const express = require("express");
const router = express.Router();
router.use(express.json());
//

router.post("/", async (req, res) => {
  const { productId } = req.params;
  try {
  } catch (error) {}
});

router.post("/", async (req, res) => {
  const { productId } = req.body;

  try {
    const addProduct = await addProductToShoppingCart(productId, userId);

    return res.status(200).json(addProduct);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
