import OrgProfile from '../models/OrgProfile.js'
export const authenticateOrg = async(req, res, next) => {
    const user = req.user
    if(user.role !== 'organisation'){
        return res.status(400).json({msg: "Unauthorized"})
    }
    const organisation = await OrgProfile.findOne({
        user: user.id
    })
    req.organisationID = organisation.id
    next()
}