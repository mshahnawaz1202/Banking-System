const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({

    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Ledger must be associated with a account!"],
        index: true,
        immutable: true,
    },

    amount: {
        type: Number,
        required: [true, "Amount is required for a Ledger Entry!"],
        index: true,
        immutable: true,
    },

    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transaction",
        required: [true, "Ledger must be associated with a transaction!"],
        index: true,
        immutable: true,
    },

    type: {
        type: String,
        enum: {
            values: ["CREDIT", "DEBIT"],
            message: "Type can be either credit or debit"
        },
        required: [true, "Ledger type is required"],
        immutable: true
    }

}, {
    timestamps: true
})

/**
 * * function to prevent ledger from modifications
 */

const preventLedgerModifications = () => {
    throw new Error("Ledger enteries are immutable and cannot be modified or deleted!")
}

/**
 * * whenever someone trying to update or delete ledger we call above function
 */

/** prevent updates */

ledgerSchema.pre("findOneAndUpdate", preventLedgerModifications);
ledgerSchema.pre("updateOne", preventLedgerModifications);
ledgerSchema.pre("updateMany", preventLedgerModifications);

/** prevent delete  */

ledgerSchema.pre("findOneAndDelete", preventLedgerModifications);
ledgerSchema.pre("deleteOne", preventLedgerModifications);
ledgerSchema.pre("deleteMany", preventLedgerModifications);

const ledgerModel = mongoose.model("ledger",ledgerSchema)



module.exports = ledgerModel