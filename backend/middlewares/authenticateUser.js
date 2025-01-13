import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import {JWT_SECRET} from '../config.js'
export const authenticateUser = async(req, res, next) => {
    const authToken = req.header("authToken")
    console.log(authToken)
    // const authToken = req.cookies.authToken
    if (!authToken){

        return res.status(400).json({
            'msg': 'Unauthorized'
        })
    }
    const data = jwt.verify(authToken, JWT_SECRET)
    req.user = await User.findById(data.user.id)
    console.log(req.user)
    next()
}