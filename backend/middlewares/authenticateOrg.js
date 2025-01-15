import OrgProfile from '../models/OrgProfile.js'
export const authenticateOrg = async(req, res, next) => {
    const user = req.user
    console.log(user, "orgmiddleware")
    if(user.role !== 'organisation'){
        return res.status(400).json({msg: "Unauthorized"})
    }
    next()
}