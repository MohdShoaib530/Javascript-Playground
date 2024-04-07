/* // config.mjs
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lms',
  jwtSecret: process.env.JWT_SECRET || '<YOUR_LONG_JWT_SECRET>',
  jwtExpiry: process.env.JWT_EXPIRY || '<JWT_EXPIRY>',
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '<YOUR_CLOUDINARY_CLOUD_NAME>',
    apiKey: process.env.CLOUDINARY_API_KEY || '<YOUR_CLOUDINARY_API_KEY>',
    apiSecret: process.env.CLOUDINARY_API_SECRET || '<YOUR_CLOUDINARY_API_SECRET>',
  },
  smtp: {
    host: process.env.SMTP_HOST || '<YOUR_SMTP_HOST>',
    port: process.env.SMTP_PORT || '<YOUR_SMTP_PORT>',
    username: process.env.SMTP_USERNAME || '<YOUR_SMTP_USERNAME>',
    password: process.env.SMTP_PASSWORD || '<YOUR_SMTP_PASSWORD>',
    fromEmail: process.env.SMTP_FROM_EMAIL || '<YOUR_SMTP_FROM_EMAIL>',
  },
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID || '<YOUR_RAZORPAY_KEY>',
    secret: process.env.RAZORPAY_SECRET || '<YOUR_RAZORPAY_SECRET>',
    planId: process.env.RAZORPAY_PLAN_ID || '<YOUR_RAZORPAY_PLAN_ID>',
  },
  frontendURL: process.env.FRONTEND_URL || '<YOUR_FRONTEND_WEBSITE_URL>',
  contactUsEmail: process.env.CONTACT_US_EMAIL || '<YOUR_CONTACT_US_EMAIL>',
};

export default config;
 */