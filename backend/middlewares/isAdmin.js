import ProfessionalProfile from '../models/ProfessionalProfile.js'
import Project from '../models/Project.js'

export const isAdmin = async (req, res, next) => {
    const userID = req.user.id
    const project = await Project.findOne({
        id: parseInt(req.params.projectID)
    })
    console.log(project)
    if (req.organisation === undefined) {
        const pro = await ProfessionalProfile.findOne({
            user: parseInt(userID)
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
    if (req.organisationID !== project.owner){
        return res.status(400).json({
            msg: "organisation is not the owner of the project"
        })
    }
    next()

}