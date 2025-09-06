import nodemailer from 'nodemailer';

// Generate a random 6-digit OTP
export const newOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Validate OTP (compare the stored OTP with the one provided)
export const validateOtp = (storedOtp, providedOtp, storedTimestamp, otpExpiry) => {
  const OTP_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes
  const currentTime = Date.now();

  if (currentTime - storedTimestamp > OTP_EXPIRY_MS) {
    return { valid: false, message: 'OTP has expired' };
  }

  return storedOtp === providedOtp
    ? { valid: true, message: 'OTP is valid' }
    : { valid: false, message: 'Invalid OTP' };
};

// Send OTP via Email
export const sendOtp = async (email, otp) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_ADMINISTRATOR, // Your email address
      pass: process.env.SMTP_ADMINISTRATOR_PASS, // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: {
      name: 'iX Booking', // Proper sender name
      address: process.env.VERIFIED_SENDER_EMAIL // Verified domain email
    },
    to: email, // Recipient address
    subject: 'Your OTP Verification Code',
    text: `Your OTP is: ${otp}`, // Plain text body
    replyTo: 'dinestx@gmail.com',
    priority: 'high',
    headers: {
      'X-Priority': '1',
      'X-MSMail-Priority': 'High'
    },
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="text-align: center; color: #007bff; margin-bottom: 20px;">Your OTP Code</h2>
      <p style="font-size: 16px; color: #333; text-align: center;">
        Use the code below to complete your verification. This code is valid for the next 5 minutes.
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="display: inline-block; font-size: 24px; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; font-weight: bold; letter-spacing: 2px;">
          ${otp}
        </span>
      </div>
      <p style="font-size: 14px; color: #555; text-align: center;">
        If you didn’t request this code, you can safely ignore this email.
      </p>
      <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="font-size: 12px; color: #aaa; text-align: center;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  `, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    return { success: false, message: 'Failed to send OTP', error };
  }
};
