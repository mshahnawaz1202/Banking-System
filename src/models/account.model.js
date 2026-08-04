const mongoose = require("mongoose");
const ledgerModel = require("./ledger.model");

//! ==========================================================================================
//! Account Model
//! ==========================================================================================

/**
 * ? Account Schema
 *
 * * Represents a bank account owned by a user.
 *
 * * Important Notes
 * * - Each account belongs to exactly one user.
 * * - An account can be ACTIVE, FROZEN or CLOSED.
 * * - Account balance is NOT stored in this collection.
 * * - Current balance is calculated from Ledger entries.
 * * - Ledger acts as the single source of truth.
 */

const accountSchema = new mongoose.Schema(
    {
        /**
         * User who owns this account.
         */
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: [true, "Account must be associated with a user."],
            index: true,
        },

        /**
         * Current account status.
         */
        status: {
            type: String,
            enum: {
                values: ["ACTIVE", "FROZEN", "CLOSED"],
                message:
                    "Status must be either ACTIVE, FROZEN or CLOSED.",
            },
            default: "ACTIVE",
        },

        /**
         * Currency used by this account.
         *
         * Example:
         * PKR
         * USD
         * EUR
         */
        currency: {
            type: String,
            required: [true, "Currency is required while creating an account."],
            default: "PKR",
        },

        /**
         * Balance is intentionally NOT stored.
         *
         * Reason:
         *
         * • Storing balances may lead to inconsistencies.
         * • Ledger entries are immutable.
         * • Current balance is always derived from the Ledger.
         * • Ledger remains the source of truth.
         */

        // balance: Number
    },
    {
        timestamps: true,
    }
);

//! ==========================================================================================
//! Compound Index
//! ==========================================================================================

/**
 * Allows fast queries for:
 *
 * • User Accounts
 * • Active Accounts
 */

accountSchema.index({
    user: 1,
    status: 1,
});

//! ==========================================================================================
//! Calculate Account Balance
//! ==========================================================================================

/**
 * ? getBalance()
 *
 * Calculates the current account balance
 * using Ledger entries.
 *
 * Formula
 *
 * Balance = Total Credits - Total Debits
 *
 * Returns
 *
 * Number
 *
 * Example
 *
 * Credits = 1500
 * Debits  = 300
 *
 * Balance = 1200
 */

accountSchema.methods.getBalance = async function () {

    const balanceData = await ledgerModel.aggregate([

        /**
         * Fetch ledger entries for this account.
         */
        {
            $match: {
                account: this._id,
            },
        },

        /**
         * Calculate total credits and total debits.
         */
        {
            $group: {
                _id: null,

                totalDebit: {
                    $sum: {
                        $cond: [
                            { $eq: ["$type", "DEBIT"] },
                            "$amount",
                            0,
                        ],
                    },
                },

                totalCredit: {
                    $sum: {
                        $cond: [
                            { $eq: ["$type", "CREDIT"] },
                            "$amount",
                            0,
                        ],
                    },
                },
            },
        },

        /**
         * Calculate final balance.
         *
         * Balance = Credits - Debits
         */
        {
            $project: {
                _id: 0,

                balance: {
                    $subtract: [
                        "$totalCredit",
                        "$totalDebit",
                    ],
                },
            },
        },
    ]);

    /**
     * If no ledger entries exist,
     * return a balance of 0.
     */
    if (balanceData.length === 0) {
        return 0;
    }

    return balanceData[0].balance;
};

//! ==========================================================================================
//! Account Model
//! ==========================================================================================

const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;