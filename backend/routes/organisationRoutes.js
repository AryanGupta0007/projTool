import express from 'express'
import OrgProfile from '../models/OrgProfile.js'
import Project from '../models/Project.js'
import ProfessionalProfile from '../models/ProfessionalProfile.js'
import {authenticateUser} from '../middlewares/authenticateUser.js'
import {authenticateOrg} from '../middlewares/authenticateOrg.js'
export const router = express.Router()

// create org profile
router.post('/profile/', authenticateUser, authenticateOrg, async(req, res) => {
    const {industry, name, logo, country, pinCode, email, phoneNo, desc, city} = req.body
    const orgProfile = await OrgProfile.create(
        {industry, logo, country, city, pinCode, email, phoneNo, desc, name}
    )
    return res.status(200).json({
        msg: "Organisation Profile Created", orgProfile
    })
})

// create project
router.post('/project/', authenticateUser, authenticateOrg, async(req, res)=>{
    const {name, startDate, endDate, team, manager} = req.body
    console.log(req.organisationID)
    console.log(req.user.id)
    const project = await Project.create({
        organisation: req.organisationID,
        owner: req.user.id,
        startDate,
        endDate,
        manager,
        team,
        name
    })
    return res.status(200).json({
        msg: "Created Project Successfully",
        project
    })

})

// add members
router.post('/add/', authenticateUser, authenticateOrg, async(req, res) => {
    const {inviteeEmail} = req.body
    const getUser = await User.findOne({
        email: inviteeEmail
    })
    const updated = {organisation: req.organisationID}

    const professional = await ProfessionalProfile.findOne({
        id: getUser.id
    })
    const updatedProfessional = await ProfessionalProfile.findByIdAndUpdate(professional.id,
        {$set: updated}, {new: true})
    return res.status(200).json({
        msg: "added member", updatedProfessional
    })
} )

