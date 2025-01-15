import express from 'express'
import {authenticateUser} from '../middlewares/authenticateUser.js'
import {authenticatePro} from '../middlewares/authenticatePro.js'
import Project from '../models/Project.js'
import Task from '../models/Task.js'
import ProfessionalProfile from '../models/ProfessionalProfile.js'
import OrgProfile from '../models/OrgProfile.js'

export const router = express.Router()
router.post('/profile/', authenticateUser, authenticatePro, async (req, res) => {
    try {
        const {
            desc,
            profilePic,
            name,
            country,
            phoneNo,
            address,
            role,
        } = req.body
        console.log("recieved")

        const proProfile = await ProfessionalProfile.create({
            user: req.user.id,
            profilePic,
            name,
            country,
            phoneNo,
            address,
            role,
            desc
        })
        return res.status(200).json({
            msg: "Professional Profile Created", profile: proProfile
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error", error
        })

    }
})