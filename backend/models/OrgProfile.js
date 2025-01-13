import mongoose from 'mongoose'
const {Schema} = mongoose
const OrgProfileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: "String",
        required: true
    },
    logo: {
        type: "String",
        required: false
    },
    industry: {
        type: "String",
        required: true
    },
    about: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    },
    phoneNo: {
        type: "String",
        required: true
    },
    address: {
        type: "String",
        required: true
    },
    pinCode: {
        type: "String",
        required: true
    },
    country: {
        type: "String",
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
}
)

export default mongoose.model('OrgProfile', OrgProfileSchema, 'orgProfile')