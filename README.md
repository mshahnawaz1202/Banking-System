<div align="center">

<img src="https://img.shields.io/badge/🏦-Banking%20System-1a1a2e?style=for-the-badge&labelColor=0f3460&color=e94560" alt="Banking System"/>

<br/><br/>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9DCE?style=for-the-badge&logo=gmail&logoColor=white)

<br/>

![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=flat-square)
![Node](https://img.shields.io/badge/Node-%3E%3D18.0.0-brightgreen?style=flat-square&logo=nodedotjs)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square&logo=github)

<br/>

[![GitHub stars](https://img.shields.io/github/stars/mshahnawaz1202/Banking-System?style=social)](https://github.com/mshahnawaz1202/Banking-System/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mshahnawaz1202/Banking-System?style=social)](https://github.com/mshahnawaz1202/Banking-System/network/members)
[![GitHub issues](https://img.shields.io/github/issues/mshahnawaz1202/Banking-System)](https://github.com/mshahnawaz1202/Banking-System/issues)

<br/>

> A secure, production-ready **REST API** for a Banking System — built with **Node.js**, **Express 5**, **MongoDB/Mongoose**, **JWT authentication**, **bcrypt password hashing**, and **Nodemailer** email notifications. Supports full account lifecycle management, fund transfers, and transaction tracking.

<br/>

[📋 Features](#-features) &nbsp;•&nbsp; [🛠 Tech Stack](#-tech-stack) &nbsp;•&nbsp; [🚀 Getting Started](#-getting-started) &nbsp;•&nbsp; [📡 API Reference](#-api-reference) &nbsp;•&nbsp; [🔐 Auth Flow](#-authentication-flow) &nbsp;•&nbsp; [📁 Project Structure](#-project-structure) &nbsp;•&nbsp; [🤝 Contributing](#-contributing)

---

</div>

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Reference](#-api-reference)
  - [Auth Routes](#-auth-routes)
  - [Account Routes](#-account-routes)
  - [Transaction Routes](#-transaction-routes)
- [Authentication Flow](#-authentication-flow)
- [Project Structure](#-project-structure)
- [Environment Variables Reference](#-environment-variables-reference)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🏛️ About the Project

The **Banking System API** is a fully-featured backend service that simulates real-world digital banking operations. It exposes a clean RESTful API that can power any frontend (React, Vue, mobile apps) or be consumed directly via tools like Postman or Thunder Client.

The system handles everything from **user registration and secure login** (with JWT + HTTP-only cookies) to **deposits, withdrawals, fund transfers**, and **email notifications** — all persisted in a MongoDB database via Mongoose ODM.

> 🔒 Security-first design: passwords are hashed with **bcryptjs**, sessions are managed via **signed JWT cookies**, and sensitive config is handled through **environment variables**.

---

## ✨ Features

### 🔐 Authentication & Security
- ✅ User registration with hashed passwords (`bcryptjs`)
- ✅ Secure login with **JWT** stored in HTTP-only cookies
- ✅ Logout with cookie invalidation
- ✅ Protected routes via auth middleware
- ✅ Role-based access (Admin / Customer)
- ✅ Email verification / OTP via **Nodemailer**

### 🏦 Account Management
- ✅ Create bank accounts (Savings / Current)
- ✅ View account details and current balance
- ✅ Update account holder profile
- ✅ Close / deactivate account (Admin)
- ✅ Search accounts by ID or email

### 💸 Transactions
- ✅ Deposit funds
- ✅ Withdraw funds with balance validation
- ✅ Transfer funds between accounts
- ✅ Full transaction history per account
- ✅ Transaction timestamps and reference tracking

### 📧 Email Notifications
- ✅ Welcome email on registration
- ✅ Transaction confirmation emails
- ✅ OTP / password reset flow via **Nodemailer**

### ⚙️ Developer Experience
- ✅ Hot-reload dev server with **Nodemon**
- ✅ `.env`-based config with **dotenv**
- ✅ Structured JSON error responses
- ✅ Cookie parsing with `cookie-parser`

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Runtime** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | `>= 18.0.0` |
| **Framework** | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) | `^5.2.1` |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | Atlas / Local |
| **ODM** | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | `^9.9.0` |
| **Auth** | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | `^9.0.3` |
| **Hashing** | ![bcrypt](https://img.shields.io/badge/bcryptjs-003366?style=flat-square) | `^3.0.3` |
| **Email** | ![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9DCE?style=flat-square&logo=gmail&logoColor=white) | `^9.0.3` |
| **Config** | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black) | `^17.4.2` |
| **Dev Tool** | ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | Latest |
| **Module System** | CommonJS (`require`) | — |

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed on your system:

```bash
node --version    # >= 18.0.0
npm --version     # >= 9.0.0
```

You'll also need a **MongoDB** instance — either:
- 🌐 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud cluster, recommended)
- 🖥️ Local MongoDB installation

---

### Environment Variables

Create a `.env` file in the root of the project:

```bash
cp .env.example .env
```

Then fill in your values (see [Environment Variables Reference](#-environment-variables-reference) below).

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mshahnawaz1202/Banking-System.git

# 2. Move into the project directory
cd Banking-System

# 3. Install all dependencies
npm install
```

---

### Running the Server

```bash
# Development mode (hot-reload via nodemon)
npm run dev

# Production mode
npm start
```

The server will start on the port defined in your `.env` (default: `http://localhost:5000`).

You should see:

```
✅ MongoDB Connected
🚀 Server running on port 5000
```

---

## 📡 API Reference

All endpoints return **JSON**. Protected routes require a valid JWT cookie (`token`) sent automatically by the browser, or the `Authorization: Bearer <token>` header.

---

### 🔑 Auth Routes

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT cookie | ❌ |
| `POST` | `/api/auth/logout` | Logout and clear cookie | ✅ |
| `GET` | `/api/auth/me` | Get current logged-in user | ✅ |
| `POST` | `/api/auth/forgot-password` | Send OTP/reset email | ❌ |
| `POST` | `/api/auth/reset-password` | Reset password with OTP | ❌ |

#### Register — `POST /api/auth/register`

```json
// Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "phone": "03001234567"
}

// Response 201
{
  "success": true,
  "message": "Account created successfully",
  "token": "<jwt_token>"
}
```

#### Login — `POST /api/auth/login`

```json
// Request Body
{
  "email": "john@example.com",
  "password": "securepassword123"
}

// Response 200
{
  "success": true,
  "message": "Login successful",
  "user": {
    "_id": "64abc...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
// JWT is set as an HTTP-only cookie: "token"
```

---

### 🏦 Account Routes

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/accounts` | Create a new bank account | ✅ |
| `GET` | `/api/accounts/my` | Get my account(s) | ✅ |
| `GET` | `/api/accounts/:id` | Get account by ID | ✅ |
| `PUT` | `/api/accounts/:id` | Update account info | ✅ |
| `DELETE` | `/api/accounts/:id` | Close/delete account | ✅ Admin |
| `GET` | `/api/accounts` | List all accounts | ✅ Admin |

#### Create Account — `POST /api/accounts`

```json
// Request Body
{
  "accountType": "savings",   // "savings" | "current"
  "initialDeposit": 5000
}

// Response 201
{
  "success": true,
  "account": {
    "_id": "64xyz...",
    "accountNumber": "BNK-20240801-0042",
    "accountType": "savings",
    "balance": 5000,
    "owner": "64abc...",
    "createdAt": "2024-08-01T10:00:00.000Z"
  }
}
```

---

### 💸 Transaction Routes

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/transactions/deposit` | Deposit funds | ✅ |
| `POST` | `/api/transactions/withdraw` | Withdraw funds | ✅ |
| `POST` | `/api/transactions/transfer` | Transfer to another account | ✅ |
| `GET` | `/api/transactions/:accountId` | Get transaction history | ✅ |

#### Deposit — `POST /api/transactions/deposit`

```json
// Request Body
{
  "accountId": "64xyz...",
  "amount": 1000
}

// Response 200
{
  "success": true,
  "message": "Deposit successful",
  "newBalance": 6000,
  "transaction": {
    "_id": "64tx1...",
    "type": "deposit",
    "amount": 1000,
    "timestamp": "2024-08-01T11:00:00.000Z"
  }
}
```

#### Transfer — `POST /api/transactions/transfer`

```json
// Request Body
{
  "fromAccountId": "64xyz...",
  "toAccountId":   "64abc...",
  "amount": 500
}

// Response 200
{
  "success": true,
  "message": "Transfer successful",
  "debitedBalance": 5500,
  "creditedAccount": "BNK-20240801-0021"
}
```

---

## 🔐 Authentication Flow

```
Client                        Server
  │                              │
  │──── POST /auth/register ────▶│  Hash password (bcryptjs)
  │                              │  Save user to MongoDB
  │                              │  Sign JWT (jsonwebtoken)
  │◀─── 201 + Set-Cookie: token ─│  Send welcome email (nodemailer)
  │                              │
  │──── POST /auth/login ───────▶│  Compare password hash
  │                              │  Sign JWT
  │◀─── 200 + Set-Cookie: token ─│
  │                              │
  │──── GET /api/accounts/my ───▶│  Middleware: verify JWT from cookie
  │  (cookie sent automatically) │  Decode userId → attach to req
  │◀─── 200 + Account Data ──────│
  │                              │
  │──── POST /auth/logout ──────▶│  Clear cookie
  │◀─── 200 ─────────────────────│
```

Tokens are stored in **HTTP-only cookies** — not `localStorage` — making them inaccessible to JavaScript and protected against XSS attacks.

---

## 📁 Project Structure

```
Banking-System/
│
├── 📄 server.js                  # App entry point — starts the HTTP server
├── 📄 package.json               # Project metadata and scripts
├── 📄 .env                       # Environment variables (not committed)
├── 📄 .env.example               # Example env file (safe to commit)
│
├── 📂 config/
│   └── db.js                     # MongoDB connection via Mongoose
│
├── 📂 models/
│   ├── User.js                   # User schema (name, email, password hash, role)
│   ├── Account.js                # BankAccount schema (type, balance, owner)
│   └── Transaction.js            # Transaction schema (type, amount, ref, timestamp)
│
├── 📂 controllers/
│   ├── authController.js         # Register, login, logout, password reset
│   ├── accountController.js      # CRUD for bank accounts
│   └── transactionController.js  # Deposit, withdraw, transfer, history
│
├── 📂 routes/
│   ├── authRoutes.js             # /api/auth/*
│   ├── accountRoutes.js          # /api/accounts/*
│   └── transactionRoutes.js      # /api/transactions/*
│
├── 📂 middleware/
│   ├── authMiddleware.js         # JWT verification, attach user to req
│   └── errorMiddleware.js        # Global error handler
│
└── 📂 utils/
    └── sendEmail.js              # Nodemailer email helper
```

---

## 🔧 Environment Variables Reference

Create a `.env` file at the project root with the following keys:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/banking-system

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Cookie
COOKIE_SECRET=your_cookie_secret_here

# Nodemailer (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM="Banking System <no-reply@bankingsystem.com>"
```

> ⚠️ **Never commit your `.env` file.** Add it to `.gitignore` immediately.

---

## 🗺️ Roadmap

- [x] User registration & login with JWT
- [x] HTTP-only cookie-based session management
- [x] Password hashing with bcryptjs
- [x] Bank account creation and management
- [x] Deposit, withdraw, and transfer endpoints
- [x] Transaction history
- [x] Email notifications via Nodemailer
- [ ] Account statement PDF generation
- [ ] Two-factor authentication (2FA)
- [ ] Loan management module
- [ ] Interest calculation (scheduled jobs)
- [ ] Rate limiting & brute-force protection
- [ ] Swagger / OpenAPI documentation
- [ ] Unit & integration tests (Jest + Supertest)
- [ ] Docker containerization

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request against `main`

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use For |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `refactor:` | Code refactoring |
| `chore:` | Maintenance / dependency updates |

### 🐛 Bug Reports

Open an [issue](https://github.com/mshahnawaz1202/Banking-System/issues) and include:
- Node.js version (`node --version`)
- Steps to reproduce
- Expected vs actual response
- Any relevant error logs or stack traces

---

## 📄 License

Distributed under the **ISC License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

<div align="center">

**M. Shah Nawaz**

[![GitHub](https://img.shields.io/badge/GitHub-mshahnawaz1202-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mshahnawaz1202)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mshahnawaz1202)

**🔗 Repository:** [https://github.com/mshahnawaz1202/Banking-System](https://github.com/mshahnawaz1202/Banking-System)

</div>

---

<div align="center">

**Built with ❤️ using Node.js · Express · MongoDB · JWT**

⭐ If this project helped you, please consider giving it a star!

</div>
