import Cart from "../../models/Cart.js";

// Add item to cart
export const addToCart = async (req, res) => {
    try {
        const { owner, product, qty } = req.body;
        let cart = await Cart.findOne({ owner });

        if (!cart) {
            cart = await Cart.create({ owner, items: [{ product, qty }] });
        } else {
            const index = cart.items.findIndex(item => item.product.toString() === product);
            if (index > -1) {
                cart.items[index].qty += qty;
            } else {
                cart.items.push({ product, qty });
            }
            cart.updatedAt = Date.now();
            await cart.save();
        }

        res.status(200).json({ success: true, cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get cart for user
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ owner: req.params.ownerId }).populate("items.product");
        if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
        res.status(200).json({ success: true, cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update cart item
export const updateCartItem = async (req, res) => {
    try {
        const { product, qty } = req.body;
        const cart = await Cart.findOne({ owner: req.params.ownerId });
        if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

        const index = cart.items.findIndex(item => item.product.toString() === product);
        if (index > -1) {
            cart.items[index].qty = qty;
            cart.updatedAt = Date.now();
            await cart.save();
        }

        res.status(200).json({ success: true, cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Remove item from cart
export const removeCartItem = async (req, res) => {
    try {
        const cart = await Cart.findOne({ owner: req.params.ownerId });
        if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

        cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);
        cart.updatedAt = Date.now();
        await cart.save();

        res.status(200).json({ success: true, cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
