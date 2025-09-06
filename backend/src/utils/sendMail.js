import nodemailer from "nodemailer";

export const OTP_VERIFICATION = async (email, otp) => {
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
        from: process.env.SMTP_ADMINISTRATOR, // Sender address
        to: email, // Recipient address
        subject: "Your OTP Verification Code",
        text: `Your OTP is: ${otp}`, // Plain text body
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
        return { success: true, message: "OTP sent successfully" };
    } catch (error) {
        console.error("Error sending OTP:", error.message);
        return { success: false, message: "Failed to send OTP", error };
    }
};

export const ACCOUNT_CREATION = async (email, otp) => {
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
        from: process.env.SMTP_ADMINISTRATOR, // Sender address
        to: email, // Recipient address
        subject: "Your OTP Verification Code",
        text: `Your OTP is: ${otp}`, // Plain text body
        html: `<div style="text-align: center; font-family: Arial, sans-serif;">
          <h2>Welcome, ${data.username}!</h2>
          <p>Your account has been successfully created.</p>
          <p>Enjoy using our platform!</p>
        </div>`, // HTML body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}`);
        return { success: true, message: "OTP sent successfully" };
    } catch (error) {
        console.error("Error sending OTP:", error.message);
        return { success: false, message: "Failed to send OTP", error };
    }
};

export const TOURNAMENT_REGISTRATION = async (email, otp) => {
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
        from: process.env.SMTP_ADMINISTRATOR, // Sender address
        to: email, // Recipient address
        subject: "Your OTP Verification Code",
        text: `Your OTP is: ${otp}`, // Plain text body
        html: `<div style="text-align: center; font-family: Arial, sans-serif;">
          <h2>You're in, ${data.username}!</h2>
          <p>Thank you for registering for the ${data.tournamentName} tournament.</p>
          <p>The event starts on ${data.startDate}.</p>
        </div>`, // HTML body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}`);
        return { success: true, message: "OTP sent successfully" };
    } catch (error) {
        console.error("Error sending OTP:", error.message);
        return { success: false, message: "Failed to send OTP", error };
    }
};

// export const sendOtp = async (email, otp) => {
//   // Create transporter
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: process.env.SMTP_PORT == 465,
//     auth: {
//       user: process.env.SMTP_ADMINISTRATOR, // Your email address
//       pass: process.env.SMTP_ADMINISTRATOR_PASS, // Your email password or app-specific password
//     },
//   });

//   // Email content
//   const mailOptions = {
//     from: process.env.SMTP_ADMINISTRATOR, // Sender address
//     to: email, // Recipient address
//     subject: 'Your OTP Verification Code',
//     text: `Your OTP is: ${otp}`, // Plain text body
//     html: `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
//       <h2 style="text-align: center; color: #007bff; margin-bottom: 20px;">Your OTP Code</h2>
//       <p style="font-size: 16px; color: #333; text-align: center;">
//         Use the code below to complete your verification. This code is valid for the next 5 minutes.
//       </p>
//       <div style="text-align: center; margin: 20px 0;">
//         <span style="display: inline-block; font-size: 24px; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; font-weight: bold; letter-spacing: 2px;">
//           ${otp}
//         </span>
//       </div>
//       <p style="font-size: 14px; color: #555; text-align: center;">
//         If you didn’t request this code, you can safely ignore this email.
//       </p>
//       <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
//       <p style="font-size: 12px; color: #aaa; text-align: center;">
//         This is an automated message. Please do not reply to this email.
//       </p>
//     </div>
//   `, // HTML body
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log(`OTP sent to ${email}`);
//     return { success: true, message: 'OTP sent successfully' };
//   } catch (error) {
//     console.error('Error sending OTP:', error.message);
//     return { success: false, message: 'Failed to send OTP', error };
//   }
// };

// export const sendEmail = async (email, emailType, data) => {
//     // Create transporter
//     const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         secure: process.env.SMTP_PORT == 465,
//         auth: {
//             user: process.env.SMTP_ADMINISTRATOR,
//             pass: process.env.SMTP_ADMINISTRATOR_PASS,
//         },
//     });

//     // Email content templates based on type
//     let subject, text, html;

//     switch (emailType) {
//         case "OTP_VERIFICATION":
//             subject = "Your OTP Verification Code";
//             text = `Your OTP is: ${data.otp}`; // Plain text body
//             html = `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
//       <h2 style="text-align: center; color: #007bff; margin-bottom: 20px;">Your OTP Code</h2>
//       <p style="font-size: 16px; color: #333; text-align: center;">
//         Use the code below to complete your verification. This code is valid for the next 5 minutes.
//       </p>
//       <div style="text-align: center; margin: 20px 0;">
//         <span style="display: inline-block; font-size: 24px; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; font-weight: bold; letter-spacing: 2px;">
//           ${data.otp}
//         </span>
//       </div>
//       <p style="font-size: 14px; color: #555; text-align: center;">
//         If you didn't request this code, you can safely ignore this email.
//       </p>
//       <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
//       <p style="font-size: 12px; color: #aaa; text-align: center;">
//         This is an automated message. Please do not reply to this email.
//       </p>
//     </div>`;

//             break;

//         case "ACCOUNT_CREATION":
//             subject = "Welcome to Our Platform!";
//             html = `
//         <div style="text-align: center; font-family: Arial, sans-serif;">
//           <h2>Welcome, ${data.username}!</h2>
//           <p>Your account has been successfully created.</p>
//           <p>Enjoy using our platform!</p>
//         </div>
//       `;
//             break;

//         case "TOURNAMENT_REGISTRATION":
//             subject = "Tournament Registration Confirmed!";
//             html = `
//         <div style="text-align: center; font-family: Arial, sans-serif;">
//           <h2>You're in, ${data.username}!</h2>
//           <p>Thank you for registering for the ${data.tournamentName} tournament.</p>
//           <p>The event starts on ${data.startDate}.</p>
//         </div>
//       `;
//             break;

//         default:
//             subject = "Notification from Our Platform";
//             html = `<p>${data.message || "Hello! This is a notification from our platform."}</p>`;
//             break;
//     }

//     const mailOptions = {
//         from: process.env.SMTP_ADMINISTRATOR,
//         to: email,
//         subject,
//         text,
//         html,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log(`Email (${emailType}) sent to ${email}`);
//         return {
//             success: true,
//             message: `${emailType} email sent successfully`,
//         };
//     } catch (error) {
//         console.error("Error sending email:", error.message);
//         return {
//             success: false,
//             message: "Failed to send email",
//             error,
//         };
//     }
// };
