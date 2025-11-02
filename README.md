# 🚀 QuickPay – Instant Payment Links for Small Hustlers

QuickPay is a **micro-payment platform** that allows small hustlers and vendors to generate instant payment links and share them with customers.  
It is built with **React + Firebase + Paystack/Flutterwave Checkout**, with no custom backend — simple, fast, and secure.

---

## ✨ Features

- 🔑 **Authentication** – Secure login/signup with Firebase Auth
- 🔗 **Payment Links** – Hustlers can generate payment links with amount & description
- 💳 **Seamless Checkout** – Buyers redirected to Paystack/Flutterwave hosted checkout
- 📡 **Realtime Updates** – Transactions stored and updated in Firebase Firestore
- 🧾 **Receipts** – Buyers and hustlers can view receipts after payment
- 📱 **Responsive UI** – Clean, mobile-friendly interface built with TailwindCSS

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite) + TailwindCSS
- **Database & Auth:** Firebase (Firestore + Auth)
- **Payment Gateway:** Paystack
- **Hosting:** Vercel

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/olamilekan5162/quickpay.git
cd quickpay
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable **Authentication (Email/Google)** and **Firestore Database**.
- Copy your Firebase config and add it to configuration file.

### 4. Configure Paystack (Test Mode)

- Sign up at [Paystack Dashboard](https://dashboard.paystack.com/).
- Get your **test public & secret keys**.
- For demo purposes, use them directly — for production, use Firebase Cloud Functions to hide secret keys.

---

## 🧪 Running Locally

```bash
npm run dev
```

Open 👉 [http://localhost:5173](http://localhost:5173)

---

## 🔒 Security Notes

- **Do not expose your Paystack secret key in production.**
- Use Firebase Cloud Functions (or any serverless function) to handle `initialize` and `verify` requests securely.
- Firestore rules restrict access so hustlers only see their own data.

---

## 📌 Roadmap

- ✅ MVP: Generate & pay with links
- 🔄 Firebase Functions for secure Paystack verification
- 📊 Hustler dashboard with transaction history
- 📱 Mobile-first PWA support
- 🌍 Multi-currency support with Flutterwave

---

## 👥 Team Alpha

This project was built as part of the **4-week QuickPay Simulator Challenge**.

- Frontend Developer – React + Tailwind
- Backend Developer – Firebase + Payment Integration
- UI/UX Designer – User flows & design system
- Data/Marketing Team – Research & Go-to-market strategy

---

## 📜 License

MIT License © 2025 Team Alpha
