import express from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../../controllers/Product/productController.js";
import multer from "multer";

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post("/", upload.array("images"), createProduct); 
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", upload.array("images"), updateProduct); 

export default router;
