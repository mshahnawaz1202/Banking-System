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

    transcation: {
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

})







