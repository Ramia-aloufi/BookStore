import { Request, Response } from "express";
import { IUser, User } from "../models/user.model";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { data } from "../config/data";

const createToken = (id:string)=>{
    return jwt.sign({id},data.jwt)

}

export const handleUserLogin = async(req:Request,res:Response)=>{
    try {
        const {password,email} = req.body

        const exist = await User.findOne({email}) 
        if (!exist) throw new Error("User does not exist");
    
        const isMatch = await bcrypt.compare(password, exist.password) 
        if(!isMatch) throw new Error("Password does not match");
    
        const token = createToken(exist._id)
        res.json({success:true,token:token})
        
    } catch (error) {
        console.log((error as Error).message);
        res.json({success:false,message:(error as Error).message || "An unexpected error occurred"})
    }





}

export const handleUserRegister = async (req:Request,res:Response)=>{
    try {
        const {name,email,password} = req.body

        const exist = await User.findOne({email}) 
        if(exist) throw new Error("User already exist")  
        if(!validator.isEmail(email)) throw new Error("Please Enter valid email address") 
        if(password.length < 8) throw new Error("Please Enter strong password") 
        

            const slat = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,slat)
            const newUser = new User({
                name,
                email,
                password:hashedPassword
            })
            const user = await newUser.save()
            const token = createToken(user._id)
             res.json({success:true,token:token})
        
    } catch (error) {
        console.log((error as Error).message);
        
          res.json({success:false,message:(error as Error).message || "An unexpected error occurred"})
    }

}

export const handleAdminLogin = async(req:Request,res:Response)=>{
try {
    const {email,password} = req.body

const exist = await User.findOne({email})
if(!exist) throw new Error('User not Exist')
if(email == data.admin.email && password == data.admin.password){
    const token = jwt.sign(email + password,data.jwt)
    res.json({success:true,token})
}else{
    throw new Error("Invalid credentials")
}
    
} catch (error) {
    console.log((error as Error).message);
    res.json({success:false,message:(error as Error).message || "An unexpected error occurred"})
}
}