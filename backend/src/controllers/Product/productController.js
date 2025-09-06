import Products from "../../models/Product.js";
import Rating from "../../models/Rating.js";


export const createProduct = async (req, res) => {
  try {
    const userId = req.user._id; // assuming req.user is populated after authentication
    const { title, description, price, stock, categorySlug, condition, tags } = req.body;

const images = req.files.map(file => file.path);


    // Create product
    const product = await Products.create({
      owner: userId,
      title,
      description,
      price,
      stock,            // new field
      category:categorySlug , 
      images,
      condition,
      tags               // new field
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all products

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    // Fetch ratings for each product
    const productsWithRatings = await Promise.all(
      products.map(async (product) => {
        const ratings = await Rating.find({ product: product._id }).populate("user", "name email");

        const avgRating =
          ratings.length > 0
            ? ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length
            : 0;

        return {
          ...product.toObject(),
          averageRating: avgRating.toFixed(1),
          totalReviews: ratings.length,
          ratings,
        };
      })
    );

    res.status(200).json({ success: true, products: productsWithRatings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//byid
export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const ratings = await Rating.find({ product: product._id }).populate("user", "name email");

    const avgRating =
      ratings.length > 0
        ? ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length
        : 0;

    res.status(200).json({
      success: true,
      product: {
        ...product.toObject(),
        averageRating: avgRating.toFixed(1),
        totalReviews: ratings.length,
        ratings,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const { title, description, price, stock, category, images, condition, tags,isActive } = req.body;

    // Update only provided fields
    const updateData = {
      ...(title && { title }),
      ...(description && { description }),
      ...(price !== undefined && { price }),
      ...(stock !== undefined && { stock }),
      ...(category && { category }),
      ...(images && { images }),
      ...(condition && { condition }),
      ...(tags && { tags }),
       ...(isActive !== undefined && { isActive }),
      updatedAt: new Date()
    };

    const product = await Products.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!product) 
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//delete
export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);

    if (!product) 
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};