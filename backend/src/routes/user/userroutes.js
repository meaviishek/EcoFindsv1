import express from "express"
;import { protect } from "../../middleware/authMiddleware.js"
;import { login, checkAuth, generateOtp,verifyOtp } from "../../controllers/user/login.js"
// ;import { login, checkAuth} from "../../controllers/user/login.js"
;import { fetchuserdata } from "../../controllers/user/userdata.js"
;import { fetchEvent } from "../../controllers/event/getEvent.js"
;import { forgetUser,forgetPassword } from "../../controllers/user/forgetPassword.js"
;import { registerUser } from "../../controllers/user/registerUser.js"
;import { referalRegisterUser } from "../../controllers/user/referalRegisterUser.js"
;import { logout } from "../../controllers/user/logOut.js"
import { getUserTickets } from "../../controllers/ticket/getUserticket.js";
import { sendMailMsg } from "../../controllers/getMail.js";
import passport from "passport";
import { googleLoginCallback } from "../../controllers/user/googleLogin.js";
import "../../config/passport.js";

const router=express.Router();

router.post("/login",login);
router.get('/me',protect,fetchuserdata);
router.post("/register",registerUser);
router.get("/check-auth",checkAuth)

//tickets
router.get("/get-tickets",protect,getUserTickets)

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect:process.env.FRONTEND_URL,session: false }),
    googleLoginCallback
  );


router.post("/generate-otp",generateOtp);
router.post("/verify-otp",verifyOtp);

// ✅ Lout User
router.post("/logout",logout);
router.post("/send",sendMailMsg)
router.post("/forget-user", forgetUser);
router.post("/forget-password",forgetPassword)


// Referal REgistration
router.post("/referal-register",referalRegisterUser);

// Event
router.get("/v1/getevents",fetchEvent)

export default router;
