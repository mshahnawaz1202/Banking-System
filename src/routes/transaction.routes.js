const {Router} = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const transactionController = require('../controllers/transaction.controller')
const transactionRoutes = Router()

/**
 * * - Post /api/transaction
 * * - Create a new Transacion
 */

transactionRoutes.post('/',authMiddleware.authMiddleware,transactionController.createTransaction)


/**
 * * - POST /api/transaction/system/initial-funds
 * * - Create intitial funds transaction from system user
 */
transactionRoutes.post('/system/initial-funds',authMiddleware.authSystemUserMiddleware,transactionController.createTransaction)



module.exports = transactionRoutes
