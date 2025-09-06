import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true }, // e.g. "electronics"
  description: { type: String, default: '' }
});

const Category = mongoose.model('Category', CategorySchema);
export default Category