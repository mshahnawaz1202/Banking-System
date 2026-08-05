const express = require("express");

const authMiddleware = require('../middlewares/auth.middleware') 

const accountController = require('../controllers/account.controller') 

const router = express.Router()

/**
 * * - POST /api/account/
 * * - create a new account
 * * - Protected Route
 */

router.post('/',authMiddleware.authMiddleware,accountController.createAccountController)

/**
 * * - GET /api/account/
 * * - Get all accounts
 * * - Protected Route
 */
router.get('/',authMiddleware.authMiddleware,accountController.getAllUsersAccountController)


/**
 * * - GET /api/account/balance/:accountId
 */

router.get('/balance/:accountId',authMiddleware,accountController,accountController.getAccountBalanceController)




module.exports = router