import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import {JWT_SECRET} from '../config.js'
export const authenticateUser = async(req, res, next) => {
    const authToken = req.header("authToken")
    console.log("atuhtoken", authToken)
    // const authToken = req.cookies.authToken
    if (authToken === undefined){
        return res.status(401).json({
            'msg': 'Unauthorized'
        })
    }
    else{

    }
    try{
    const data = jwt.verify(authToken, JWT_SECRET)
    req.user = await User.findById(data.user.id)
    console.log("hksfkslhf", req.user)
    next()
    }
    catch(e){
        res.status(400).json({msg: "Invalid AuthToken"})
    }


}