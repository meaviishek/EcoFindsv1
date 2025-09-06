import mongoose from "mongoose"

const OrderItemSnapshot = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  title: String,
  price: Number,
  image: String,
  qty: Number,
  ownerAtPurchase: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // seller
}, { _id: false });

const OrderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [OrderItemSnapshot],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending','paid','shipped','delivered','cancelled'], default: 'paid' },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
