import express from 'express'
import Project from '../models/Project.js'
import Task from '../models/Task.js'
import User from '../models/User.js'
import OrgProfile from '../models/OrgProfile.js'
import ProfessionalProfile from '../models/ProfessionalProfile.js'
import {authenticateUser} from '../middlewares/authenticateUser.js'
import mongoose from 'mongoose'

export const router = express.Router()


router.get('/:orgID/projects/', async (req, res) => {
    await console.log("hello")
    return res.status(200).json({msg: "hello"})
})

//get user profile
// Get user profile
router.get('/:type/profile/:id/', authenticateUser, async (req, res) => {
    console.log("Received request:", req.params);

    const {type, id} = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid ID format");
        return res.status(400).json({msg: "Invalid ID format"});
    }

    try {
        if (type === "organisation") {
            console.log("Fetching organisation profile for user:", id);
            const response = await OrgProfile.findOne({user: id});
            console.log("Organisation query result:", response);
            const {name, country, industry, phoneNo, pinCode, city, address} = response
            console.log(response, "responsePRo")
            const profile = {
                id: response._id,
                desc: response.about,
                profilePic: response.logo,
                country,
                name,
                industry,
                phoneNo,
                pinCode,
                city,
                address
            }
            if (profile) {
                return res.status(200).json({msg: "Organisation fetched", profile});
            }

            return res.status(404).json({msg: "Organisation profile not available"});
        }

        if (type === "professional") {
            console.log("Fetching professional profile for user:", id);
            const response = await ProfessionalProfile.findOne({user: id});
            console.log("Professional query result:", response);
            const profile = {
                id: response._id,
                desc: response.about,
                profilePic: response.logo,
                country,
                name,
                industry,
                phoneNo,
                pinCode,
                city,
                address
            }
            if (response) {
                console.log(response)
                return res.status(200).json({msg: "Professional fetched", profile: response});
            }

            return res.status(404).json({msg: "Professional profile not available"});
        }

        return res.status(400).json({msg: "Invalid type provided"});
    } catch (error) {
        console.error("Error fetching profile:", error);

        if (!res.headersSent) {
            return res.status(500).json({msg: "Internal server error", error});
        }
    }
});

//get all professionals
router.get('/professionals/all/', authenticateUser, async (req, res) => {
    try {
        const allProfessionals = await ProfessionalProfile.find()
        console.log(allProfessionals)
        const professionals = await ProfessionalProfile.find({organisation: null})
        console.log(professionals)
        return res.status(200).json({professionals, msg: "Here"})
    } catch (err) {
        return res.status(500).json({msg: "Internal server error"})
    }
})
//get all organisations
router.get('/organisations/all/', authenticateUser, async (req, res) => {
    try {
        console.log("here")
        const organisations = await OrgProfile.find({})
        console.log(organisations)
        return res.status(200).json({organisations, msg: "Here"})
    } catch (err) {
        console.log(err)
        return res.status(500).json({msg: "Internal server error"})
    }
})
//get all members
router.get('/members/all/:orgID/', authenticateUser, async (req, res) => {
    try {
        const {orgID} = req.params
        console.log("here")
        const members = await ProfessionalProfile.find({
            organisation: orgID
        })
        console.log(members)
        return res.status(200).json({members, msg: "Here"})
    } catch (err) {
        console.log(err)
        return res.status(500).json({msg: "Internal server error"})
    }
})
// get all tasks in a project
router.get('/tasks/all/:projID/', authenticateUser, async (req, res) => {
    try {
        const {projID} = req.params
        const tasks = await Task.find({
            project: projID
        })
        console.log(tasks)
        return res.status(200).json({msg: "here are the tasks", tasks})
    } catch (err) {
        res.status(500).json({msg: "INTERNAL SERVER ERROR", err})
    }
})
// get all projects from a organisation
router.get('/projects/all/:orgID/', authenticateUser, async (req, res) => {
    try {
        const {orgID} = req.params
        const projects = await Project.find({
            organisation: orgID
        })
        return res.status(200).json({msg: "all projects", projects})
    } catch (error) {
        return res.status(500).json({msg: "INTERNAL SERVER ERROR", error})
    }
})

router.get('/:professionalID/', authenticateUser, async (req, res) => {
    try {
        const {professionalID} = req.params
        const professionalProfile = await ProfessionalProfile.findById(professionalID)
        return res.status(200).json({msg: "profile fetched", "profile": professionalProfile})
    } catch (error) {
        return res.status(500).json({msg: "error", error})
    }
})
router.get('/:projectID/', authenticateUser, async (req, res) => {
    try {
        const {projectID} = req.params
        const project = await Project.findById(projectID)
        return res.status(200).json({msg: "project fetched", project})
    } catch (error) {
        return res.status(500).json({msg: "error", error})
    }
})
router.get('/:organisationID/', authenticateUser, async (req, res) => {
    try {
        const {organisationID} = req.params
        const organisation = await OrgProfile.findById(organisationID)
        return res.status(200).json({msg: "project fetched", organisation})
    } catch (error) {
        return res.status(500).json({msg: "error", error})
    }
})
router.get('/:taskID/', authenticateUser, async (req, res) => {
    try {
        const {taskID} = req.params
        const task = await Task.findById(taskID)
        return res.status(200).json({msg: "project fetched", task})
    } catch (error) {
        return res.status(500).json({msg: "error", error})
    }
})