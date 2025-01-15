import express from 'express'
import cors from 'cors'
import {connectToMongo} from './db.js'
import {router as authRouter} from './routes/authRoutes.js'
import {router as  orgRouter} from './routes/organisationRoutes.js'
import {router as adminRouter} from './routes/adminRoutes.js'
import {router as genRouter} from './routes/genRoutes.js'
import {router as proRouter} from './routes/proRoutes.js'

const port = 3010
const app = express()
connectToMongo()
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/org", orgRouter)
app.use("/api/admin", adminRouter)
app.use("/api/gen", genRouter)
app.use("/api/pro", proRouter)
app.listen(port, () => {
    `app listening at ${port}`
})