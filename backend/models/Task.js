import mongoose from 'mongoose'
const {Schema} = mongoose
const TaskSchema = new Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: "String",
        required: true
    },
    due: {
        type: "String",
        required: true
    },
    start: {
        type: "String",
        required: true
    },
    assignedTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProfessionalProfile"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Task", TaskSchema, "task")