/**
 * ? Create a New Transaction
 *
 * * 1. Validate Request
 * *    - Validate sender account.
 * *    - Validate receiver account.
 * *    - Validate transfer amount.
 *
 * * 2. Validate Idempotency Key
 * *    - Prevent duplicate transaction requests.
 *
 * * 3. Check Account Status
 * *    - Ensure both accounts exist.
 * *    - Ensure both accounts are active.
 *
 * * 4. Derive Sender Balance from Ledger
 * *    - Calculate the current balance using ledger entries.
 * *    - Verify sufficient funds are available.
 *
 * * 5. Create Transaction (PENDING)
 * *    - Create a new transaction record.
 * *    - Initial status = PENDING.
 *
 * * 6. Create DEBIT Ledger Entry
 * *    - Record the debit entry for the sender.
 *
 * * 7. Create CREDIT Ledger Entry
 * *    - Record the credit entry for the receiver.
 *
 * * 8. Mark Transaction COMPLETED
 * *    - Update transaction status from PENDING to COMPLETED.
 *
 * * 9. Commit MongoDB Session
 * *    - Commit all database changes atomically.
 *
 * * 10. Send Email Notification
 * *     - Notify sender and receiver of the successful transfer.
 */
//! FAILURE HANDLING

/**
 * * If any step fails:
 * * - Abort MongoDB transaction
 * * - Rollback all database changes
 * * - Mark transaction as FAILED
 * * - Return appropriate error response
 */

const transactionModel = require('../models/transaction.model')
const ledgerModel = require('../models/ledger.model')
const accountModel = require('../models/account.model')
const emailService = require('../services/email.service')


async function createTransaction(req, res) {

    const { fromAccount, toAccount, amount, idempotencyKey } = req.body
    /**
     * * 1. Validate Request
     *  - check if toAccount and fromAccount exists or not in database
     */
    if (!fromAccount || !toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message: "fromAccount, toAccount, amount and idempotencyKey are required!"
        })
    }

    /**
     * ! check if toAccount and fromAccount exists or not in database
     */

    const fromUserAccount = await accountModel.findOne({
        _id: fromAccount,
    })

    const toUserAccount = await accountModel.findOne({
        _id: toAccount,
    })

    if (!fromUserAccount || !toUserAccount) {
        return res.status(400).json({
            message: "Invalid fromAccount ortoAccount."
        })
    }

    /**
     * * 2. Validate Idempotency Key
     * - Prevent duplicate transaction requests.
     */

    const existingTransaction = await transactionModel.findOne({
        idempotencyKey: idempotencyKey
    })

    if (existingTransaction) {
        if (existingTransaction.status == 'COMPLETED') {
            return res.status(200).json({
                message: "Transaction Already Exists",
                transaction: existingTransaction
            })
        }

        if (existingTransaction.status == 'PENDING') {
            return res.status(200).json({
                message: "Transaction is Still Processing"
            })

        }

        if (existingTransaction.status == 'FAILED') {
            return res.status(500).json({
                message: "Transaction Process Failed!"
            })

        }

        if (existingTransaction.status == 'REVERSED') {
            return res.status(500).json({
                message: "Transaction Process was reversed!"
            })

        }

    }

    /**
     * * 3. Check Account Status
     * - check if toAccount and fromAccount are active or not (frozen or closed)
     */

    if (toUserAccount.status !== 'ACTIVE' || fromUserAccount.status !== 'ACTIVE') {
        return res.status(500).json({
            message: "Both fromAccount and toAccount must be active to process transaction"
        })
    }


}

