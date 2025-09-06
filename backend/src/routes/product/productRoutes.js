import express from "express";
import { upload } from "../../config/cloudinary.js";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../../controllers/Product/productController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add",protect,upload.array("images", 5),createProduct);
router.get("/get", getProducts);
router.get("/get/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);



export default router;
