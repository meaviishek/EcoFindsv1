import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const protect = async (req, res, next) => {
    const token = req.cookies?.i;


    if (!token) {
        return res
            .status(401)
            .json({ message: "Access Denied. No Token Provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
         
        let user = await User.findById(decoded.id,) ||
                   await Admin.findById(decoded.id) ||
                   await Organizer.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found. Invalid token." });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("JWT Verification Error:", err.message);
        return res
            .status(403)
            .json({ message: "Token is invalid or expired." });
    }
};

// Admin
// export const adminProtect = async (req, res, next) => {
//     const token = req.cookies.token;


//     console.log("Admin token in authmiddleware:", token); // Debug

//     if (!token) {
//         return res
//             .status(401)
//             .json({ message: "Access Denied. No Token Provided!" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // Fetch admin from database using decoded ID
//         const admin = await Admin.findById(decoded.id);

//         if (!admin) {
//             return res.status(404).json({ message: "Admin not found." });
//         }

//         // Attach admin data to req.user
//         req.user = { id: admin._id, role: admin.role };

//         next();
//     } catch (err) {
//         console.error("JWT Verification Error:", err.message);
//         return res
//             .status(403)
//             .json({ message: "Token is invalid or expired." });
//     }
// };

// Role-based authorization middleware
// export const authorizeRoles = (...roles) => {
//     return (req, res, next) => {
//         if (!req.user) {
//             return res.status(401).json({ message: "Unauthorized. No user found." });
//         }

//         if (!roles.includes(req.role)) {
//             return res.status(403).json({ message: "Access Denied. Insufficient Permissions!" });
//         }

//         next();
//     };
// };