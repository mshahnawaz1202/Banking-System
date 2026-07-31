const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
/**----------------------------------------------------------------------------------------------------------------------- */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: [true, "Email Already Exists!"],
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name: {
        type: String,
        required: [true, 'Name is required'],

    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'],
        minlength: [6, "Password should be atleast 6 characters"],
        select: false,
    }
},{
    timestamps : true
})
/**----------------------------------------------------------------------------------------------------------------------- */
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next()
    }
    const hash = await bcrypt.hash(this.password,11)
    this.password = hash
    return next()
    
})
/**----------------------------------------------------------------------------------------------------------------------- */
userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password,this.password)
}
/**----------------------------------------------------------------------------------------------------------------------- */
const userModel = moongose.model("user",userSchema)

module.exports = userModel 

