import express from "express"
;import { protect } from "../../middleware/authMiddleware.js"
import { generateOtp } from "../../controllers/User/login.js";
import { verifyOtp } from "../../controllers/User/login.js";
import { logout } from "../../controllers/User/login.js";
import { login } from "../../controllers/User/login.js";
import { registerUser } from "../../controllers/User/registerUser.js";
import { checkAuth } from "../../controllers/User/login.js";
import { fetchuserdata } from "../../controllers/User/userdata.js";

// import { googleLoginCallback } from "../../controllers/user/googleLogin.js";
// import "../../config/passport.js";

const router=express.Router();

router.post("/login",login);
router.get('/me',protect,fetchuserdata);
router.post("/register",registerUser);
router.get("/check-auth",checkAuth)


// router.get(
//     "/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
//   );
  
//   router.get(
//     "/google/callback",
//     passport.authenticate("google", { failureRedirect:process.env.FRONTEND_URL,session: false }),
//     googleLoginCallback
//   );


router.post("/generate-otp",generateOtp);
router.post("/verify-otp",verifyOtp);

// ✅ Lout User
router.post("/logout",logout);
// router.post("/send",sendMailMsg)
// router.post("/forget-user", forgetUser);
// router.post("/forget-password",forgetPassword)


export default router;
