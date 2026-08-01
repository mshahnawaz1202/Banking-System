const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


/**
 * - User register Controller
 * - /api/auth/register
 */
const userRegisterController = async (req, res) => {
    const { email, name, password } = req.body

    const isExist = await userModel.findOne({ email: email })
    if (isExist) {
        return res.status(422).json({
            message: "User with email Already Exists.",
            status: 'Failed.'
        })
    }

    const user = await userModel.create({
        email,
        name,
        password
    })

    const token  = jwt.sign({userId: user._id},process.env.JWT_SECRET)
    res.cookie("jwt_token",token)
    res.status(201).json({
        user : {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })

}


/**
 * - User login Controller
 * - /api/auth/login
 */
const userLoginController = async (req,res) => {
    const {email, password} = req.body
    /**
     * ? Firstly Find user with email
     * ! if user not exists send a 401 response, email or password id invalid
     * * if user exists then check password
     * ! if password is invalid then again send a 401 response, email or password is incorrect
     * * if password is valid then again generate a token
     */
    const user = await userModel.findOne({
        email:email
    }).select("+password")
    
    if(!user){
        return res.status(401).json({
            message : "Email or Password is Invalid!"
        })
    }
    const isValidPassword = await user.comparePassword(password)
    if(!isValidPassword){
        return res.status(401).json({
            message : "Email or Password is Invalid!"
        })
    }

    const token  = jwt.sign({userId: user._id},process.env.JWT_SECRET)
    res.cookie("jwt_token",token)
    res.status(200).json({
        user : {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })
}




/** --------------------------------------------------------------------------------------------------------------------------- */
module.exports = {
    userRegisterController,userLoginController
}