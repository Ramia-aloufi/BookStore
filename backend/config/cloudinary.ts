import {v2 as cloudinary} from "cloudinary"
import { data } from "./data"

export const connectCloudinary= async()=>{
    cloudinary.config({
        cloud_name:data.cloudinary.name,
        api_key:data.cloudinary.key,
        api_secret:data.cloudinary.secret
    })

}