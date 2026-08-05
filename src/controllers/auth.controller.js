const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const emailService = require('../services/email.service')
const tokenBlacklistModel = require('../models/blacklist.model')


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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.cookie("token", token)
    res.status(201).json({
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })

    await emailService.sendRegisterationEmail(user.email, user.name)

}


/**
 * - User login Controller
 * - /api/auth/login
 */
const userLoginController = async (req, res) => {
    const { email, password } = req.body
    /**
     * ? Firstly Find user with email
     * ! if user not exists send a 401 response, email or password id invalid
     * * if user exists then check password
     * ! if password is invalid then again send a 401 response, email or password is incorrect
     * * if password is valid then again generate a token
     */
    const user = await userModel.findOne({
        email: email
    }).select("+password")

    if (!user) {
        return res.status(401).json({
            message: "Email or Password is Invalid!"
        })
    }
    const isValidPassword = await user.comparePassword(password)
    if (!isValidPassword) {
        return res.status(401).json({
            message: "Email or Password is Invalid!"
        })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.cookie("token", token)
    res.status(200).json({
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })
}

/**
 * - User Logout Controller
 * - /api/auth/logout
 */

async function userLogoutController(req, res) {
    const token =
        req.cookies.token ||
        req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(400).json({
            message: "User logged out successfully."
        });
    }

    

    await tokenBlacklistModel.create({
        token: token
    })
   res.clearCookie('token');
   
    return res.status(200).json({
        message: "User logged out successfully."
    });
}




/** --------------------------------------------------------------------------------------------------------------------------- */
module.exports = {
    userRegisterController, userLoginController,userLogoutController
}