import Rating from "../../models/Rating.js";

export const getProductRatings = async (req, res) => {
  try {
    const { productId } = req.params;

    // Get all ratings for this product & populate user info
    const ratings = await Rating.find({ product: productId })
      .populate("user", "name email") // only return user name & email
      .sort({ createdAt: -1 });

    // Calculate average rating
    const avgRating =
      ratings.length > 0
        ? ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length
        : 0;

    res.status(200).json({
      success: true,
      totalReviews: ratings.length,
      averageRating: avgRating.toFixed(1),
      ratings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};