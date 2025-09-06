import express from "express";
import { createOrder, getOrdersByBuyer, getOrderById, updateOrderStatus } from "../../controllers/Order/orderController.js";

const router = express.Router();

router.post("/", createOrder); 
router.get("/buyer/:buyerId", getOrdersByBuyer); 
router.get("/:id", getOrderById); 
router.put("/:id/status", updateOrderStatus); 

export default router;
