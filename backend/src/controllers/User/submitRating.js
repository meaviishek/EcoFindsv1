import Rating from "../../models/Rating.js";
import Products from "../../models/Product.js";
export const submitRating = async (req, res) => {
  try {
    const userId = req.user._id; // Logged-in user
    const { productId, rating, review } = req.body;

    // Check if product exists
    const product = await Products.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Upsert rating (update if exists, create if not)
    const newRating = await Rating.findOneAndUpdate(
      { product: productId, user: userId },
      { rating, review },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(201).json({ success: true, rating: newRating });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: "You already rated this product" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};
