const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
/**-----------------------------------------------------------user authentication--------------------------------------------------------------------------------------- */

/**
 * ? Authenticate User
 *
 * * Purpose
 * * - Authenticate requests using a JSON Web Token (JWT).
 * * - Protect private routes.
 * * - Attach the authenticated user to req.user.
 *
 * * Authentication Flow
 * * 1. Extract JWT from Cookie or Authorization Header.
 * * 2. Verify the JWT.
 * * 3. Decode the JWT payload.
 * * 4. Retrieve the authenticated user from the database.
 * * 5. Attach the user to req.user.
 * * 6. Continue to the next middleware.
 *
 * * Returns
 * * - 401 Unauthorized
 * *   • Token is missing.
 * *   • Token is invalid or expired.
 * *   • User does not exist.
 */

async function authMiddleware(req, res, next) {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token is missing!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.userId)
        req.user = user

        return next()

    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized access, token is Invalid!"
        })

    }
}

/**----------------------------------------------Systme user authnetication-------------------------------------------------------------------------------------------------------------------- */

/**
 * ? Authenticate System User
 *
 * * Purpose
 * * - Authenticate and authorize System Users.
 * * - Protect internal/admin routes.
 *
 * * Authorization Flow
 * * 1. Extract JWT.
 * * 2. Verify the JWT.
 * * 3. Retrieve the authenticated user.
 * * 4. Verify System User privileges.
 * * 5. Attach the user to req.user.
 * * 6. Continue to the next middleware.
 *
 * * Returns
 * * - 401 Unauthorized
 * *   • Token is missing.
 * *   • Token is invalid or expired.
 * *   • User does not exist.
 * *
 * * - 403 Forbidden
 * *   • User is not a System User.
 */

async function authSystemUserMiddleware(req, res, next) {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token is missing!"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const systemUser = await userModel.findById(decoded.userId).select('+systemUser')

        if (!systemUser) {
            return res.status(403).json({
                message: "Forbidden Access. Not a System User!"
            })

        }
        req.user = user


        return next()

    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized access, token is Invalid!"
        })

    }


}

module.exports = {
    authMiddleware, authSystemUserMiddleware
}