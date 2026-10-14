# EImTeC Groupe — Website

Website for **EImTeC Groupe**, a real-estate and architecture company (in French). It presents the company, its services and a gallery of its projects, and lets visitors send a message through a contact form.

🔗 **Live:** https://architecturewebsite.vercel.app

## Features

- Pages: home, about (*à propos*), services, projects (*projets*) and contact
- Project gallery with images served from Cloudinary
- Contact form that sends an email through a Next.js API route (Nodemailer + Gmail SMTP)
- Responsive design

## Tech stack

Next.js · React · TypeScript · Tailwind CSS · Radix UI · Cloudinary · Nodemailer

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

Environment variables:

| Variable | Purpose |
|----------|---------|
| `SMTP_USER` | Gmail address used to send contact-form emails |
| `SMTP_PASS` | Gmail app password |
| `RECIPIENT_EMAIL` | Where contact messages are delivered (defaults to `SMTP_USER`) |

## Author

Fatoumata Diouf — [@timah1402](https://github.com/timah1402)
