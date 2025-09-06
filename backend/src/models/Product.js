import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, index: 'text' },
  description: { type: String, default: '' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  price: { type: Number, required: true, min: 0 },
  images: [{ type: String }], // store URLs; at least one placeholder
  condition: { type: String, enum: ['like-new','good','fair','for-parts'], default: 'good' },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
}, { timestamps: true });

ProductSchema.index({ title: 'text', description: 'text' }); // text index for keyword search

const Products = mongoose.model('Product', ProductSchema);
export default Products