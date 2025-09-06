import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true }, // hashed
  username: { type: String, required: true },
  profilePicture: { type: String, default: '/placeholders/user.png' },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
  // optional fields
  bio: { type: String, default: '' },
  phone: { type: String, default: '' },
  // small counters/metadata
   isVerified: {
    type: Boolean,
    default: false
  },

  listingsCount: { type: Number, default: 0 },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User