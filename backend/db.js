import mongoose from 'mongoose'
import {dbPassword} from './config.js'
const dbName = "ProjManagementApp"
const uri = `mongodb+srv://aryangupta:${dbPassword}@cluster0.il7jb.mongodb.net/${dbName}`

export const connectToMongo = () => {
    mongoose.connect(uri).then(() => {
            console.log("Database connected")
        }
    ).catch((e) => {
        console.log(e)
    })
}