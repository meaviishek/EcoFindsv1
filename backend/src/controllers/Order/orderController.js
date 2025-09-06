import Orders from "../../models/Order.js";
import Product from "../../models/Product.js";

// Create a new order
export const createOrder = async (req, res) => {
    try {
        const { buyer, items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ success: false, message: "No items in order" });
        }

        let totalAmount = 0;
        const orderItems = [];

        for (const item of items) {
            const product = await Product.findById(item.productId);
            if (!product) continue;

            totalAmount += product.price * item.qty;

            orderItems.push({
                productId: product._id,
                title: product.title,
                price: product.price,
                image: product.images[0] || "",
                qty: item.qty,
                ownerAtPurchase: product.owner
            });
        }

        const order = await Orders.create({ buyer, items: orderItems, totalAmount });
        res.status(201).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all orders for a buyer
export const getOrdersByBuyer = async (req, res) => {
    try {
        const orders = await Orders.find({ buyer: req.params.buyerId }).populate("items.ownerAtPurchase", "username email");
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get single order by ID
export const getOrderById = async (req, res) => {
    try {
        const order = await Orders.findById(req.params.id).populate("items.ownerAtPurchase", "username email");
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });
        res.status(200).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Orders.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });
        res.status(200).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
