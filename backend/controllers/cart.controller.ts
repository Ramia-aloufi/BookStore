import { Request, Response } from "express";
import { User } from "../models/user.model";

export const addToCart = async(req:Request,response:Response) =>{
try {
    const {userId,itemId} = req.body

    const userData = await User.findOne({_id:userId})
    const cartData = await userData.cartData

    if(cartData[itemId]){
        cartData[itemId] += 1
    }else{
        cartData[itemId] = 1
    }

    await User.findByIdAndUpdate({_id:userId},{cartData})

    response.json({success:true,message:"add to cart"})
} catch (error) {
    response.json({success:false,message:(error as Error).message})
}
}
export const updateCart = async(req:Request,response:Response) =>{
    try {
        const {userId,itemId,quantity} = req.body

        const userData = await User.findOne({_id:userId})        
        const cartData = await userData.cartData

        cartData[itemId] = quantity
        await User.findByIdAndUpdate({_id:userId},{cartData})

        response.json({success:true,message:"your cart updated"})
        
    } catch (error) {
        response.json({success:false,message:(error as Error).message})

    }
    }
    export const geUserCart = async(req:Request,response:Response) =>{
        try {
            const {userId} = req.body

            const userData = await User.findOne({_id:userId})
            const cartData = await userData.cartData
            response.json({success:true,cartData})


        } catch (error) {
            response.json({success:false,message:(error as Error).message})

        }
        }