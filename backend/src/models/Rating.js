import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  },
  review: { 
    type: String, 
    default: '' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
}, { timestamps: true });

// Optional: Ensure a user can only rate a product once
RatingSchema.index({ product: 1, user: 1 }, { unique: true });

const Rating = mongoose.model('Rating', RatingSchema);
export default Rating;
