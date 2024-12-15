import { ErrorRequestHandler } from "express";
import mongoose, { Error } from "mongoose";
import { data } from "./data";


const connectDB = async()=>{
    const uri = data.db
    try {
        //establish connection
        await mongoose.connect(uri)
        console. log("✔️ Database Connected")
    } catch (error:Error | unknown) { 
        console. log(" X Database connection failed: ",(error as Error).message)
    }
}

export default connectDB