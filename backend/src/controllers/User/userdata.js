import User from "../../models/User.js";


export const fetchuserdata = async (req, res) => {
    try {
        // Fetch user using ID from token
        const user = await User.findById(req.user.id);

        // If user not found, return an error
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Return user data
        return res.status(200).json({
            id: user._id,
            email: user.email,
            username: user.name,
            phone: user.phone,
            profile_picture: user.profile_picture,
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
