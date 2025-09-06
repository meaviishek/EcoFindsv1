import bcrypt from "bcryptjs";
import User from "../../models/User.js";

export const registerUser = async (req, res) => {
    const { username, phone, email, password } = req.body;

    // Required field validation
    const requiredFields = {
        email: "Email is required",
        username: "Name is required",
        password: "Password is required",
        phone: "Phone number is required",
    };

    for (const [field, message] of Object.entries(requiredFields)) {
        if (!req.body[field]) {
            return res.status(400).json({ message });
        }
    }

    try {
        // Check if user with the same email or phone already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phone }]  // Check for both email and phone uniqueness
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(400).json({ message: "Email already registered." });
            } else if (existingUser.phone === phone) {
                return res.status(400).json({ message: "Phone number already registered." });
            }
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await User.create({
            phone,
            username,
            email,
            password: hashedPassword,
            isVerified: false
        });

        return res.status(200).json({ message: "User registered successfully", isVerified: newUser.isVerified });

    } catch (error) {
        // Handle duplicate key error explicitly
        if (error.code === 11000) {
            if (error.keyPattern.phone) {
                return res.status(400).json({ message: "Phone number already registered." });
            }
            if (error.keyPattern.email) {
                return res.status(400).json({ message: "Email already registered." });
            }
        }

        console.error("Error during user registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
