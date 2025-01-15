import express from 'express'
import Task from '../models/Task.js'
import {authenticateUser} from '../middlewares/authenticateUser.js'
import {isAdmin} from '../middlewares/isAdmin.js'

export const router = express.Router()
router.post('/:projectID/tasks/create/', authenticateUser, isAdmin, async (req, res) => {
    try {
        const {projectID} = req.params
        const userID = req.user.id
        console.log("task form", projectID)
        const {name, due, start, assignedTo, desc} = req.body
        const task = await Task.create({
            start,
            due,
            name,
            desc,
            assignedTo,
            createdBy: userID,
            project: projectID
        })
        return res.status(200).json({
            msg: "Task created success", task
        })

    }
    catch(error){
        return res.status(500).json({msg: "INTERNAL SERVER ERROR", error})
    }

})