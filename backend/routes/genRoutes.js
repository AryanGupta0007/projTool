import express from 'express'
import Project from '../models/Project.js'
import Task from '../models/Task.js'
import OrgProfile from '../models/OrgProfile.js'
import ProfessionalProfile from '../models/ProfessionalProfile.js'
import {authenticateUser} from '../middlewares/authenticateUser.js'

export const router = express.Router()


router.get('/:orgID/projects/', authenticateUser, async (req, res) => {
    await console.log("hello")
    return res.status(200).json({msg: "hello"})
})

//get user profile
router.get('/:type/profile/:id/', authenticateUser, async (req, res) => {
    const {id, type} = req.params
    // const type = "organisation"
    if (type === "organisation") {
        const response = await OrgProfile.findOne({
            user: id
        })
        if (response) {
            res.status(200).json({msg: "organisation fetched", profile: response})
        }
        return res.status(400).json({msg: "organisation profile not available"})
    }
    const response = await ProfessionalProfile.findOne({
        user: id
    })
    if (!response) {
        return res.status(400).json({msg: "profile profile not available"})
    }
    return res.status(200).json({msg: "profile", profile: response})

})
