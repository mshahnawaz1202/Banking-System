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
    }

})







