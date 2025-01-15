import User from '../models/User.js'

export const authenticatePro = async (req, res, next) => {
    try {
        const userID = req.user.id
        console.log(userID)
        const getUser = await User.findById(userID)
        console.log("user", getUser)
        if (getUser.role.toLowerCase() === "professional") {
            console.log("user is a professional")
            return  next()
        }

        return res.status(400).json({msg: "user is not a professional"})

    } catch (error) {
        console.log("Internal Server Error")
        return res.status(500).json({msg: "Internal Server Error", error})
    }
}