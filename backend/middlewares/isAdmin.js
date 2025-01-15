import ProfessionalProfile from '../models/ProfessionalProfile.js'
import Project from '../models/Project.js'
import OrgProfile from '../models/OrgProfile.js'

export const isAdmin = async (req, res, next) => {
    const userID = req.user.id
    console.log("userID")
    console.log(req.params.projectID)
    const project = await Project.findById(
    req.params.projectID
    )
    console.log(project)
    if (req.user.role === "professional") {
        const pro = await ProfessionalProfile.findOne({
            user: userID
        })
        if (!pro) {
            return res.status(400).json({
                msg: "Unauthorized pro not found"
            })
        }
        if (project.manager !== pro.id) {
            return res.status(400).json({
                msg: "User is not the manager "
            })
        }
        next()
    }
    const organisation = await OrgProfile.findOne(
    {
        user: userID
    }
)
    console.log("orgID ",organisation)
    if (parseInt(organisation.user) !== parseInt(project.owner)) {
        return res.status(400).json({
            msg: "organisation is not the owner of the project"
        })
    }
    next()

}