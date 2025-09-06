import express from "express";
import { addToCart, getCart, updateCartItem, removeCartItem } from "../../controllers/Cart/cartController.js";

const router = express.Router();

router.post("/", addToCart); // Add item
router.get("/:ownerId", getCart); // Get cart
router.put("/:ownerId", updateCartItem); // Update quantity
router.delete("/:ownerId/:productId", removeCartItem); // Remove item

export default router;
