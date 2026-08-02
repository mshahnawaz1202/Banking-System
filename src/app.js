/**
 * ! Modules required
 */
const express = require("express");
const cookieParser = require('cookie-parser')

/**
 * ? Routes
 */
const authRoute = require('./routes/auth.routes')
const accountRoute = require('./routes/account.routes')


app = express()


/** Middlewares */
app.use(express.json());
app.use(cookieParser())

/** 
 * ? use Routes
 * * /api/auth => login and resgiteration
 * * /api/account => account creation
 * 
 */
app.use('/api/auth',authRoute)
app.use('/api/account',authRoute)








module.exports = app