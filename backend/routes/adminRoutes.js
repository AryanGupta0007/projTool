import express from 'express'
import Task from '../models/Task.js'
import {authenticateUser} from '../middlewares/authenticateUser.js'
import {isAdmin} from '../middlewares/isAdmin.js'
export const router = express.Router()
router.post('/project/:projectID/tasks/create', authenticateUser, isAdmin, async(req, res) => {
    const {projectID} = req.params
    const userID = req.user.id
    const {name, due, start, assignedTo} = req.body
    const task = await Task.create({
        start: start,
        due: due,
        name: name,
        assignedTo: assignedTo,
        createdBy: userID,
        project: projectID
    })
    return res.status(200).json({
        msg: "Task created success", task
    })

})