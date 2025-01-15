import mongoose from 'mongoose'
const {Schema} = mongoose
const ProfessionalProfileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    profilePic : {
      type: "String",
      required: true
    },
    desc: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    country: {
        type: "String",
        required: true
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrgProfile",
        required: false
    },
    phoneNo: {
        type: "String",
        required: true
    },
    address: {
        type: "String",
        required: true
    },
    role: {
        type: "String",
        required: true
    }
})
export default mongoose.model("ProfessionalProfile", ProfessionalProfileSchema, "professionalProfile")