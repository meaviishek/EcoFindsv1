export const otpStore = new Map();

setInterval(() => {
    const now = Date.now();
    if (otpStore.size > 0) {
        for (const [email, { otpExpiry }] of otpStore.entries()) {
            if (otpExpiry < now) {
                otpStore.delete(email);
            }
        }
    }
}, 10 * 60 * 1000);
