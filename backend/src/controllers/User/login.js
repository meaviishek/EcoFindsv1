import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "../../models/User.js";
import { sendOtp, newOtp } from "../../utils/otpmail.js";


const otpStore = new Map();

const generateOtpDetails = () => {
    const otpCode = newOtp();
    const otpExpiry = Date.now() + 10 * 60 * 1000;
    return { otpCode, otpExpiry };
};

setInterval(() => {
    const now = Date.now();
    for (const [email, { otpExpiry }] of otpStore.entries()) {
        if (otpExpiry < now) {
            otpStore.delete(email);
        }
    }
}, 5 * 60 * 1000);




export const generateOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email address is required" });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Generate OTP and store it
        const { otpCode, otpExpiry } = generateOtpDetails();
        otpStore.set(email, { otpCode, otpExpiry });

        // Send the OTP via email
        await sendOtp(email, otpCode);

        return res.status(200).json({ message: "OTP sent to your email" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// Verify the OTP
export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
    }

    try {
        // Retrieve the OTP record for the email
        const record = otpStore.get(email);

        // Log the current OTP store for debugging
        console.log("Current OTP store:", Array.from(otpStore.entries()));

        if (!record) {
            console.log("No OTP found for this email.");
            return res.status(400).json({ message: "Invalid OTP or email" });
        }

        const { otpCode, otpExpiry } = record;

        // Check if the OTP matches
        if (otpCode !== otp) {
            console.log("Incorrect OTP provided.");
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // Check if the OTP has expired
        if (otpExpiry < Date.now()) {
            otpStore.delete(email); // Remove expired OTP immediately
            console.log("OTP has expired.");
            return res.status(400).json({ message: "OTP has expired" });
        }

        otpStore.delete(email); // Remove OTP after successful verification
        console.log("OTP verified successfully.");

        User.isVerified = true
        return res.status(200).json({ message: "OTP verified successfully" });


    } catch (error) {
        console.error("Error during OTP verification:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Phone/Email and password are required." });
        }

       
        // Find user
        const user = await User.findOne({ email: email});

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Validate password
        const isPassValid = await bcrypt.compare(password, user.password);
        if (!isPassValid) {
            return res.status(401).json({ message: "Invalid Password." });
        }

        // ✅ Check if user is verified
        if (!user.isVerified) {
            return res.status(403).json({ message: "Account not verified. Please verify OTP first." });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                phone: user.phone
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Prepare safe user data
        const userData = {
            id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            profile_picture: user.profilePicture || null,
            isVerified: user.isVerified
        };

        // Set cookies
        return res
            .cookie("i", token, {
                secure: true,
                httpOnly: true,
                sameSite: "none",
                maxAge: 1000 * 60 * 60 * 48
            })
            .cookie("user", JSON.stringify(userData), {
                secure: true,
                httpOnly: false,
                sameSite: "none",
                maxAge: 1000 * 60 * 60 * 48
            })
            .status(200)
            .json({ message: "Logged in successfully." });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};




export const checkAuth = (req, res) => {
    const authToken = req.cookies.i;
    if (authToken) {
    
      res.status(200).json({ isAuthenticated: true});
    } else {
      res.status(200).json({ isAuthenticated: false});
    }
  };



  export const logout = (req, res) => {
    return res
    
        .clearCookie("i", {
            secure: true,
            httpOnly: true,
            sameSite: "none",
        })
        .clearCookie("user", {
            secure: true,
            httpOnly: false,
            sameSite: "none",
        })
        .status(200)
        .json({ message: "You're now logged out." });
};
