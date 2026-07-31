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



/** --------------------------------------------------------------------------------------------------------------------------- */
module.exports = {
    userRegisterController
}