import mongoose from 'mongoose'
const {Schema} = mongoose
const ProjectSchema = new Schema({
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrgProfile"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: "String",
        required: true
    },
    startDate: {
        type: "String",
        required: true
    },
    endDate: {
        type: "String",
        required: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProfessionalProfile"
    },
    team: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "ProfessionalProfile"
    }],
    createdOn: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("Project", ProjectSchema, "project")
