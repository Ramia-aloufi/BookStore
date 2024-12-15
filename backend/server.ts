import express, { Request, Response } from "express"
import cors from "cors"
import"dotenv/config"
import connectDB from "./config/db"
import userRouter from "./routes/user.routes"
import bookRoute from "./routes/book.routes"
import { connectCloudinary } from "./config/cloudinary"

// app configuration
const app = express()

const port = process.env.PORT || 4000


//middleware
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary( )
// API endpoint
app.use('/api/user',userRouter)
app.use('/api/book',bookRoute)

app.get("/",(req:Request,res:Response)=>{
    res. send('API successfully connected!')
})

app.listen(port,()=>{
    console. log('Server is running on PORT: ' + port)
})
