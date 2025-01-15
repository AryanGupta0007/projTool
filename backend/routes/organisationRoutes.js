import express from 'express'
import OrgProfile from '../models/OrgProfile.js'
import Project from '../models/Project.js'
import User from '../models/User.js'
import ProfessionalProfile from '../models/ProfessionalProfile.js'
import {authenticateUser} from '../middlewares/authenticateUser.js'
import {authenticateOrg} from '../middlewares/authenticateOrg.js'

export const router = express.Router()

// create org profile
router.post('/profile/', authenticateUser, authenticateOrg, async (req, res) => {
    const {industry, name, logo, country, address, pinCode, email, phoneNo, about, city} = req.body
    console.log(industry, name, logo, country, address, pinCode, email, phoneNo, about, city)
    const orgProfile = await OrgProfile.create(
        {"user": req.user.id, industry, logo, country, city, pinCode, email, phoneNo, about, address, name}
    )
    const profile = {
        id: orgProfile._id,
        desc: orgProfile.about,
        profilePic: orgProfile.logo,
        country,
        name,
        industry,
        phoneNo,
        pinCode,
        email,
        city,
        address
    }
    return res.status(200).json({
        msg: "Organisation Profile Created", profile
    })
})

// create project
router.post('/project/', authenticateUser, authenticateOrg, async (req, res) => {
    console.log("hereprojec")
    const {name, startDate, endDate, about, manager} = req.body
    console.log(req.user)
    const organisation = await OrgProfile.findOne({
        user: req.user._id
    })
    console.log(organisation)
    console.log("orgID", organisation._id)
    console.log(req.user.id, name, startDate, endDate, about, manager)
    const project = await Project.create({
        organisation: organisation._id,
        owner: req.user.id,
        startDate,
        endDate,
        manager,
        about,
        name
    })
    return res.status(200).json({
        msg: "Created Project Successfully",
        project
    })

})

// add members
router.post('/addMember/', authenticateUser, authenticateOrg, async (req, res) => {
    try{
    const {inviteeEmail, organisationID} = req.body
        console.log(inviteeEmail, organisationID, "....")
    const getUser = await User.findOne({
        email: inviteeEmail
    })
        console.log("ye user h ", getUser)
    const updated = {organisation: organisationID}

    const professional = await ProfessionalProfile.findOne({
        user: getUser.id
    })
    console.log("professionalFetched ", professional)
    const updatedProfessional = await ProfessionalProfile.findByIdAndUpdate(professional._id,
        {$set: updated}, {new: true})
    return res.status(200).json({
        msg: "added member", updatedProfessional
    })
    }
    catch(error){
        return res.status(500).json({msg: "hello error ", error})
    }

})

