/**
 * ! Modules required
 */
const express = require("express");
const cookieParser = require("cookie-parser");

/**
 * ? Routes
 */
const authRoute = require("./routes/auth.routes");
const accountRoute = require("./routes/account.routes");
const transactionRoute = require("./routes/transaction.routes");

const app = express();

/** Middlewares */
app.use(express.json());
app.use(cookieParser());

/**
 * ? Use Routes
 * * /api/auth        => User registration & login
 * * /api/account     => Account management
 * * /api/transaction => Money transfers
 */
app.use("/api/auth", authRoute);
app.use("/api/account", accountRoute);
app.use("/api/transaction", transactionRoute);

module.exports = app;