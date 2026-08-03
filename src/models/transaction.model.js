const mongoose = require("mongoose");
/**------------------------------------------------------------------------------------------------------------------------ */
/**
 * ? For creating a Transaction we need below things
 * * fromAccount      -> Sender Account (Debit)
 * * toAccount        -> Receiver Account (Credit)
 * * status           -> Transfer Amount
 * * amount           -> PENDING | COMPLETED | FAILED | REVERSED
 * * idmepotencyKey   -> Unique Key to Prevent Duplicate Requests
 */
/**------------------------------------------------------------------------------------------------------------------------ */
const transactionSchema = new mongoose.Schema({

    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Transaction must be associated with a from account."],
        index: true,
    },

    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Transaction must be associated with a to account."],
        index: true,
    },

    status: {
        type: String,
        enum: {
            values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
            message: "Status can be either PENDING,COMPLETED, FAILED or REVERSED."
        },
        default: "PENDING",
    },

    amount: {
        type: Number,
        required: [true, "Amount is required for creating a Transaction"],
        min: [0, "Transaction cannot be negative."]
    },

    idmepotencyKey: {
        type: String,
        required: [true, "IdmepotencyKey is required for creating a transaction."]
    }

}, {
    timestamp: true
})
/**------------------------------------------------------------------------------------------------------------------------ */
//! ==========================================================
//! Transaction Flow
//! ==========================================================

/**
 * * Step 1: Create a Transaction
 * * Step 2: Debit amount from Sender (fromAccount)
 * * Step 3: Credit amount to Receiver (toAccount)
 * * Step 4: Create a Ledger Entry
 * * Step 5: Update Transaction Status to COMPLETED
 */

