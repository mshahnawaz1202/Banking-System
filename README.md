# 🏦 Banking System API

<div align="center">

<br/>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9DCE?style=for-the-badge&logo=gmail&logoColor=white)

<br/>

![License](https://img.shields.io/badge/License-ISC-3178C6?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-22C55E?style=flat-square)
![Node](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-22C55E?style=flat-square)
![Module](https://img.shields.io/badge/Module-CommonJS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-7C3AED?style=flat-square&logo=github)

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/mshahnawaz1202/Banking-System?style=social)](https://github.com/mshahnawaz1202/Banking-System/stargazers)
&nbsp;
[![GitHub Forks](https://img.shields.io/github/forks/mshahnawaz1202/Banking-System?style=social)](https://github.com/mshahnawaz1202/Banking-System/network/members)
&nbsp;
[![GitHub Issues](https://img.shields.io/github/issues/mshahnawaz1202/Banking-System)](https://github.com/mshahnawaz1202/Banking-System/issues)

<br/>

> A **secure, production-ready REST API** for a full-featured Banking System — built with **Node.js**, **Express 5**, **MongoDB + Mongoose**, **JWT authentication**, **bcrypt password hashing**, a **token blacklist** for logout security, a **ledger system** for audit trails, **idempotency keys** to prevent duplicate transactions, and **Nodemailer** email notifications.

<br/>

[📖 Overview](#-project-overview) &nbsp;•&nbsp;
[✨ Features](#-key-features) &nbsp;•&nbsp;
[🛠 Stack](#-technology-stack) &nbsp;•&nbsp;
[🚀 Getting Started](#-getting-started) &nbsp;•&nbsp;
[📡 API Docs](#-api-documentation) &nbsp;•&nbsp;
[🔐 Auth Flow](#-authentication-workflow) &nbsp;•&nbsp;
[📂 Structure](#-project-structure) &nbsp;•&nbsp;
[🗺 Roadmap](#-roadmap) &nbsp;•&nbsp;
[🤝 Contributing](#-contributing)

</div>

---

## 📖 Project Overview

The **Banking System API** is a fully-featured backend service that models real-world digital banking operations. It exposes a clean, consistent RESTful API designed to power any client — a React/Vue frontend, a mobile app, or direct API consumers like Postman and Thunder Client.

The system covers the complete account lifecycle: from **user registration and secure login** through **account creation, deposits, withdrawals, peer-to-peer fund transfers**, and **detailed transaction history** — all persisted in MongoDB and protected with industry-standard security practices.

### Why this project exists

Most banking backend tutorials stop at basic CRUD. This project goes further by implementing patterns found in real fintech systems:

- **Token blacklisting** ensures that logged-out JWTs are immediately invalidated, preventing token reuse attacks
- **Idempotency keys** on transfers protect against duplicate transactions from network retries
- **A double-entry ledger** keeps debit/credit records separate from raw transactions, enabling accurate reconciliation and audit trails
- **Email service abstraction** keeps transport logic decoupled and easily swappable

### Real-world use cases

This API can serve as the backend for a digital bank dashboard, a fintech MVP, a university capstone project, or as a clean reference architecture for Node.js + MongoDB applications.

---

## ✨ Key Features

### 🔐 Authentication
- User registration with server-side password hashing via `bcryptjs`
- Secure login with **JWT** issued as HTTP-only cookies
- Logout with **token blacklisting** — revoked tokens are permanently invalidated
- Protected routes enforced by a dedicated auth middleware

### 🏦 Account Management
- Create multiple bank accounts per user (Savings / Current)
- Retrieve account details, current balance, and status
- Update account information
- Soft-delete / deactivate accounts
- Admin-level access to list and manage all accounts

### 💸 Transaction Management
- Deposit funds with instant balance update
- Withdraw funds with balance validation to prevent overdrafts
- Peer-to-peer fund transfers with a two-phase commit pattern:
  `pending → debit sender → credit recipient → completed`
- **Idempotency keys** prevent duplicate transfers on network retry
- Full transaction history per account with timestamps and reference IDs

### 📒 Ledger System
- Every transaction writes a corresponding debit or credit entry to a dedicated `Ledger` collection
- Stores `balanceAfter` for point-in-time balance reconstruction
- Provides a complete, immutable audit trail for compliance and reconciliation

### 📧 Email Service
- Automated welcome email on successful login
- Decoupled `email.service.js` utility using **Nodemailer**
- Configurable SMTP transport (Gmail, SendGrid, or any provider)

### 🔒 Security
- Passwords hashed with `bcryptjs` (salted, never stored in plain text)
- JWT sessions managed via HTTP-only cookies (XSS-resistant)
- Token blacklist prevents reuse of invalidated JWTs
- Sensitive configuration handled exclusively through environment variables

### ⚙️ Developer Experience
- Hot-reload development server via **Nodemon**
- `npm run dev` / `npm start` scripts for dev and production modes
- Structured JSON error responses across all endpoints
- MVC architecture with a dedicated service layer for email logic

---

## 📌 Project Highlights

| Highlight | Detail |
|---|---|
| 🌐 **REST API** | Fully RESTful, JSON-based, stateless |
| 🔑 **JWT Auth** | Signed tokens, HTTP-only cookies, blacklist on logout |
| 🍃 **MongoDB** | Flexible document store via Mongoose ODM |
| 📧 **Nodemailer** | Transactional email on login and key events |
| 🏗 **MVC Architecture** | Routes → Controllers → Services → Models |
| 🍪 **Secure Cookies** | HTTP-only; inaccessible to client-side JavaScript |
| 🔐 **Password Hashing** | bcryptjs with configurable salt rounds |
| 👤 **Role-Based Access** | Admin and Customer permission levels |
| 📒 **Transaction Ledger** | Double-entry ledger for audit trails |
| 🔁 **Idempotency Keys** | Duplicate transfer prevention on retries |
| 🧱 **Clean Code** | Separation of concerns across all layers |

---

## 🛠 Technology Stack

| Layer | Technology | Badge | Version |
|---|---|---|---|
| **Runtime** | Node.js | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | `>= 18.0.0` |
| **Framework** | Express.js | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) | `^5.2.1` |
| **Database** | MongoDB | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | Atlas / Local |
| **ODM** | Mongoose | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square) | `^9.9.0` |
| **Auth Tokens** | jsonwebtoken | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | `^9.0.3` |
| **Hashing** | bcryptjs | ![bcrypt](https://img.shields.io/badge/bcryptjs-003366?style=flat-square) | `^3.0.3` |
| **Email** | Nodemailer | ![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9DCE?style=flat-square&logo=gmail&logoColor=white) | `^9.0.3` |
| **Config** | dotenv | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black) | `^17.4.2` |
| **Cookies** | cookie-parser | ![cookie-parser](https://img.shields.io/badge/cookie--parser-FF6B6B?style=flat-square) | `^1.4.7` |
| **Dev Server** | Nodemon | ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | Latest |
| **Module System** | CommonJS | ![JS](https://img.shields.io/badge/CommonJS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | `require()` |

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────┐
│                       CLIENT                        │
│         (Postman / Browser / Mobile App)            │
└────────────────────────┬────────────────────────────┘
                         │  HTTP Request
                         ▼
┌─────────────────────────────────────────────────────┐
│                    server.js                        │
│              Entry Point / HTTP Server              │
└────────────────────────┬────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                     src/app.js                      │
│   Express App — Middleware, CORS, Body Parser,      │
│   Cookie Parser, Route Mounting                     │
└────────────────────────┬────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
   auth.routes     account.routes   transaction.routes
          │              │              │
          ▼              ▼              ▼
   auth.controller  account.controller  transaction.controller
          │              │              │
          └──────────────┼──────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    user.model    account.model  transaction.model
                               ledger.model
                               blacklist.model
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                    MongoDB Atlas                    │
│      users / accounts / transactions / ledger       │
│             / blacklist collections                 │
└─────────────────────────────────────────────────────┘

   🔒 auth.middleware.js — guards every protected route
   📧 email.service.js   — handles all Nodemailer calls
```

---

## 📂 Project Structure

```
Banking-System/
│
├── 📄 server.js                        # Entry point — creates HTTP server, starts listening
├── 📄 package.json                     # Dependencies, scripts, project metadata
├── 📄 .env                             # Environment secrets (never committed)
├── 📄 .env.example                     # Safe template for environment variables
│
└── 📂 src/
    │
    ├── 📄 app.js                       # Express app setup — middleware, routes, error handling
    │
    ├── 📂 config/
    │   └── db.js                       # Mongoose connection with Atlas/local URI
    │
    ├── 📂 models/                      # Mongoose schemas and models
    │   ├── user.model.js               # User — name, email, hashed password
    │   ├── account.model.js            # BankAccount — type, balance, status, owner
    │   ├── transaction.model.js        # Transaction — amount, status, idempotency key
    │   ├── ledger.model.js             # Ledger — debit/credit entries, balanceAfter
    │   └── blacklist.model.js          # Invalidated JWT tokens (logout)
    │
    ├── 📂 controllers/                 # Request handlers — no business logic, thin layer
    │   ├── auth.controller.js          # register, login, logout
    │   ├── account.controller.js       # createAccount, getAccount, updateAccount, etc.
    │   └── transaction.controller.js   # transfer, deposit, withdraw, history, ledger
    │
    ├── 📂 routes/                      # Express routers — define endpoint paths
    │   ├── auth.routes.js              # /api/auth/*
    │   ├── account.routes.js           # /api/accounts/*
    │   └── transaction.routes.js       # /api/transactions/*
    │
    ├── 📂 middlewares/
    │   └── auth.middleware.js          # verifyToken — JWT check + blacklist check
    │
    └── 📂 services/
        └── email.service.js            # Nodemailer transport wrapper — sendWelcomeEmail, etc.
```

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed before proceeding:

```bash
node --version      # Must be >= 18.0.0
npm --version       # Must be >= 9.0.0
```

You also need a **MongoDB** instance:
- 🌐 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — Free cloud cluster (recommended)
- 🖥️ Local MongoDB — Install from [mongodb.com/try/download](https://www.mongodb.com/try/download/community)

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mshahnawaz1202/Banking-System.git

# 2. Navigate into the project
cd Banking-System

# 3. Install all dependencies
npm install
```

---

### Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

See the full [Environment Variables Reference](#-environment-variables-reference) section below.

---

### Running Development Server

```bash
npm run dev
```

Starts the server with **Nodemon** — the process automatically restarts on every file save.

---

### Production Mode

```bash
npm start
```

Runs `node server.js` directly without the Nodemon watcher.

---

### Expected Output

```
🚀 Server is running on Port 3000
✅ MongoDB connected successfully
```

---

## ⚙️ Environment Variables Reference

Create a `.env` file at the project root. All variables below are required unless marked optional.

| Variable | Description | Required | Example |
|---|---|---|---|
| `PORT` | Port the HTTP server listens on | ✅ | `3000` |
| `NODE_ENV` | Runtime environment | ✅ | `development` |
| `MONGODB_URI` | MongoDB connection string | ✅ | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for signing JWTs | ✅ | `a-long-random-string` |
| `JWT_EXPIRES_IN` | JWT token expiry duration | ✅ | `7d` |
| `SMTP_SERVICE` | Email provider service name | ✅ | `gmail` |
| `SMTP_EMAIL` | Sender email address | ✅ | `you@gmail.com` |
| `SMTP_PASSWORD` | App-specific password | ✅ | `abcd efgh ijkl mnop` |
| `SMTP_FROM` | Display name + address | ✅ | `"Bank" <no-reply@bank.com>` |
| `APP_URL` | Base URL of this API | Optional | `http://localhost:3000` |
| `FRONTEND_URL` | Frontend app URL (for CORS) | Optional | `http://localhost:5173` |

```env
# ── Server ──────────────────────────────────────────
PORT=3000
NODE_ENV=development

# ── Database ─────────────────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/banking_system

# ── Authentication ────────────────────────────────────
JWT_SECRET=replace_with_a_very_long_random_secret_string
JWT_EXPIRES_IN=7d

# ── Email (Gmail SMTP) ────────────────────────────────
SMTP_SERVICE=gmail
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_16_char_app_password
SMTP_FROM="Banking System <no-reply@bankingsystem.com>"

# ── App URLs ──────────────────────────────────────────
APP_URL=http://localhost:3000
FRONTEND_URL=http://localhost:5173
```

> ⚠️ **Security note:** Never commit `.env` to version control. Confirm `.env` is listed in `.gitignore` before your first push.

**Gmail App Password setup:** Go to Google Account → Security → 2-Step Verification → App Passwords.

---

## 📡 API Documentation

All endpoints return `application/json`. Protected routes require a valid JWT — sent automatically via the `token` HTTP-only cookie, or passed as `Authorization: Bearer <token>`.

---

### 🔑 Authentication APIs

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Create a new user account | ❌ |
| `POST` | `/api/auth/login` | Login — returns JWT cookie + sends welcome email | ❌ |
| `POST` | `/api/auth/logout` | Logout — blacklists the current JWT | ✅ |

#### `POST /api/auth/register`

```json
// Request Body
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}

// Response — 201 Created
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

#### `POST /api/auth/login`

```json
// Request Body
{
  "email": "john@example.com",
  "password": "SecurePassword123"
}

// Response — 200 OK
// Sets HTTP-only cookie: token=<jwt>
{
  "success": true,
  "message": "Login successful. Welcome email sent!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

#### `POST /api/auth/logout`

```json
// No request body required — JWT read from cookie

// Response — 200 OK
{
  "success": true,
  "message": "Logged out successfully"
}
// Token is added to the blacklist. Further requests with this token are rejected.
```

---

### 🏦 Account APIs

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/accounts/create` | Create a new bank account | ✅ |
| `GET` | `/api/accounts/:id` | Get account details by ID | ✅ |
| `GET` | `/api/accounts/balance/:id` | Get current account balance | ✅ |
| `PUT` | `/api/accounts/update/:id` | Update account information | ✅ |

#### `POST /api/accounts/create`

```json
// Request Body
{
  "accountType": "Savings",
  "currency": "USD"
}

// Response — 201 Created
{
  "success": true,
  "account": {
    "_id": "64xyz...",
    "accountNumber": "BNK-20240801-0042",
    "accountType": "Savings",
    "currency": "USD",
    "balance": 0,
    "status": "Active",
    "userId": "507f1f77bcf86cd799439011",
    "createdAt": "2024-08-01T10:00:00.000Z"
  }
}
```

#### `GET /api/accounts/balance/:id`

```json
// Response — 200 OK
{
  "success": true,
  "accountId": "64xyz...",
  "balance": 4500.00,
  "currency": "USD"
}
```

---

### 💸 Transaction APIs

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/transactions/transfer` | Transfer money between accounts | ✅ |
| `GET` | `/api/transactions/history/:accountId` | Get full transaction history | ✅ |
| `GET` | `/api/transactions/:id` | Get a single transaction by ID | ✅ |
| `GET` | `/api/ledger/:accountId` | Get ledger entries for an account | ✅ |

#### `POST /api/transactions/transfer`

```json
// Request Body
{
  "fromAccountId": "64xyz...",
  "toAccountId":   "64abc...",
  "amount": 500.00,
  "idempotencyKey": "transfer-uuid-20240801-001",
  "description": "Rent payment"
}

// Response — 200 OK
{
  "success": true,
  "message": "Transfer successful",
  "transaction": {
    "_id": "64tx1...",
    "fromAccountId": "64xyz...",
    "toAccountId": "64abc...",
    "amount": 500.00,
    "status": "completed",
    "idempotencyKey": "transfer-uuid-20240801-001",
    "createdAt": "2024-08-01T11:00:00.000Z",
    "completedAt": "2024-08-01T11:00:01.000Z"
  }
}
```

**Transfer lifecycle:**
```
1. Create transaction record  →  status: pending
2. Validate sender balance    →  reject if insufficient
3. Debit sender account       →  balance decreases
4. Credit recipient account   →  balance increases
5. Write ledger entries       →  debit + credit records
6. Update transaction         →  status: completed
```

If the same `idempotencyKey` is submitted again, the original transaction is returned without a duplicate being created.

#### `GET /api/ledger/:accountId`

```json
// Response — 200 OK
{
  "success": true,
  "entries": [
    {
      "_id": "64led1...",
      "accountId": "64xyz...",
      "transactionId": "64tx1...",
      "type": "debit",
      "amount": 500.00,
      "balanceAfter": 4500.00,
      "description": "Rent payment",
      "createdAt": "2024-08-01T11:00:01.000Z"
    }
  ]
}
```

---

## 🔐 Authentication Workflow

```
┌─────────┐                                  ┌──────────────────────────┐
│ Client  │                                  │         Server           │
└────┬────┘                                  └─────────────┬────────────┘
     │                                                     │
     │  POST /api/auth/register                            │
     │ ──────────────────────────────────────────────────▶ │
     │                                                     │  Hash password (bcryptjs)
     │                                                     │  Save User to MongoDB
     │                                                     │
     │  201 Created                                        │
     │ ◀────────────────────────────────────────────────── │
     │                                                     │
     │  POST /api/auth/login                               │
     │ ──────────────────────────────────────────────────▶ │
     │                                                     │  Compare password hash
     │                                                     │  Sign JWT (jsonwebtoken)
     │                                                     │  Send welcome email (Nodemailer)
     │  200 OK + Set-Cookie: token=<jwt>; HttpOnly        │
     │ ◀────────────────────────────────────────────────── │
     │                                                     │
     │  GET /api/accounts/:id   (cookie auto-sent)        │
     │ ──────────────────────────────────────────────────▶ │
     │                                                     │  auth.middleware:
     │                                                     │  1. Extract JWT from cookie
     │                                                     │  2. Check blacklist → reject if found
     │                                                     │  3. Verify signature + expiry
     │                                                     │  4. Attach user to req.user
     │  200 OK + Account Data                              │
     │ ◀────────────────────────────────────────────────── │
     │                                                     │
     │  POST /api/auth/logout                              │
     │ ──────────────────────────────────────────────────▶ │
     │                                                     │  Add token to Blacklist collection
     │                                                     │  Clear cookie
     │  200 OK                                             │
     │ ◀────────────────────────────────────────────────── │
     │                                                     │
     │  GET /api/accounts/:id   (same token reused)       │
     │ ──────────────────────────────────────────────────▶ │
     │                                                     │  Token found in blacklist → 401
     │  401 Unauthorized                                   │
     │ ◀────────────────────────────────────────────────── │
```

---

## 🔒 Security Features

| Feature | Implementation | Benefit |
|---|---|---|
| **Password Hashing** | `bcryptjs` with salt rounds | Plain-text passwords never stored |
| **JWT Authentication** | `jsonwebtoken` signed tokens | Stateless, verifiable sessions |
| **HTTP-only Cookies** | `cookie-parser` + Express | Tokens hidden from JavaScript (XSS protection) |
| **Token Blacklist** | `blacklist.model.js` in MongoDB | Logout immediately invalidates tokens |
| **Idempotency Keys** | Unique index on transactions | Prevents duplicate transfers on retry |
| **Protected Routes** | `auth.middleware.js` | Unauthenticated access blocked at route level |
| **Environment Variables** | `dotenv` | Secrets never hardcoded in source |
| **Input Validation** | Controller-level checks | Malformed requests rejected early |

```bash
# Audit dependencies for known vulnerabilities
npm audit

# Auto-fix where possible
npm audit fix
```

---

## 📈 Project Statistics

| Module | Details |
|---|---|
| **REST Endpoints** | 11 routes across 3 resource groups |
| **MongoDB Collections** | 5 — users, accounts, transactions, ledger, blacklist |
| **Mongoose Models** | 5 |
| **Controllers** | 3 — auth, account, transaction |
| **Route Files** | 3 |
| **Middleware** | 1 — JWT auth + blacklist check |
| **Services** | 1 — email (Nodemailer) |
| **npm Dependencies** | 8 production packages |

---

## 🧪 Testing the API

No test runner is configured yet. In the meantime, test all endpoints using any of the following tools:

### Postman
1. Import a new collection
2. Set `baseUrl` as a collection variable: `http://localhost:3000`
3. After login, Postman will automatically store and send the JWT cookie on subsequent requests

### Thunder Client (VS Code extension)
1. Install the **Thunder Client** extension in VS Code
2. Create requests directly inside the editor
3. Cookies are managed automatically per collection

### REST Client (VS Code extension)
Create a `requests.http` file in the project root:

```http
### Register
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "password": "Test@1234"
}

### Login
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "jane@example.com",
  "password": "Test@1234"
}

### Create Account (requires cookie from login)
POST http://localhost:3000/api/accounts/create
Content-Type: application/json

{
  "accountType": "Savings",
  "currency": "USD"
}
```

---

## 🗺 Roadmap

### ✅ Completed
- [x] User registration and login with JWT
- [x] HTTP-only cookie-based session management
- [x] Token blacklist for secure logout
- [x] Password hashing with bcryptjs
- [x] Bank account creation and management
- [x] Fund transfer with idempotency keys
- [x] Double-entry ledger system
- [x] Transaction history per account
- [x] Welcome email via Nodemailer
- [x] MVC + service layer architecture

### 🔜 Planned
- [ ] Rate limiting and brute-force protection (express-rate-limit)
- [ ] Input validation middleware (Zod or Joi)
- [ ] Two-factor authentication (2FA via TOTP)
- [ ] Transaction rollback on partial failure
- [ ] Account statement export (PDF / CSV)
- [ ] Interest calculation via scheduled jobs (node-cron)
- [ ] Loan management module
- [ ] Swagger / OpenAPI interactive documentation
- [ ] Unit and integration tests (Jest + Supertest)
- [ ] Docker containerization
- [ ] Admin dashboard endpoint group
- [ ] Comprehensive request/error logging (Winston)

---

## 🤝 Contributing

Contributions are welcome and highly appreciated. Please follow the steps below:

### Workflow

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/Banking-System.git
cd Banking-System

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and commit
git commit -m "feat: add a clear description of what you changed"

# 5. Push your branch
git push origin feature/your-feature-name

# 6. Open a Pull Request against the main branch on GitHub
```

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | When to Use |
|---|---|
| `feat:` | Adding a new feature |
| `fix:` | Fixing a bug |
| `docs:` | Documentation changes only |
| `refactor:` | Code changes that neither fix a bug nor add a feature |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance, dependency updates |

### 🐛 Bug Reports

Open an [issue](https://github.com/mshahnawaz1202/Banking-System/issues) and include:
- Node.js version (`node --version`)
- Steps to reproduce the issue
- Expected vs. actual response
- Relevant error messages or stack traces

---



## 👨‍💻 Author

<div align="center">

**M. Shah Nawaz**

[![GitHub](https://img.shields.io/badge/GitHub-mshahnawaz1202-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mshahnawaz1202)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mshahnawaz1202)

🔗 **Repository:** [github.com/mshahnawaz1202/Banking-System](https://github.com/mshahnawaz1202/Banking-System)

</div>

---

## ⭐ Support

If this project helped you learn, gave you a head start, or served as a reference — please consider:

- ⭐ **Starring** the repository
- 🍴 **Forking** it and building something on top
- 🐛 **Reporting** issues to help improve it
- 🤝 **Contributing** a feature or fix

<div align="center">

---

**Built with ❤️ using Node.js · Express · MongoDB · JWT · Nodemailer**

![Version](https://img.shields.io/badge/Version-1.0.0-22C55E?style=flat-square)
![Last Updated](https://img.shields.io/badge/Last%20Updated-2024-3B82F6?style=flat-square)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-e94560?style=flat-square)

</div>
