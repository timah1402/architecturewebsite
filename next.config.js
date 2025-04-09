/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL || "emeamj@gmail.com"
  }
}

module.exports = nextConfig