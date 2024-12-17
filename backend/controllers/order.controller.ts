import { Request, Response } from "express"
import { data } from "../config/data"
import Order from "../models/order.model"
import { User } from "../models/user.model"

const currency ="$"
const deliveryCharges = 10

export const placeOrderCOD = async(req:Request,res:Response)=>{
    try {
        const {userId,items,address,amount} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }
        const order = new Order(orderData)
        await order.save()
        await User.findByIdAndUpdate({_id:userId},{cartData:{}})
        res.json({success:true,message:"order placed successfully"})
        
    } catch (error) {
        res.json({success:false,message:(error as Error).message})

    }
}
export const placeOrderStripe = async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
}
export const verifyStripe = async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
}

export const userOrder = async(req:Request,res:Response)=>{
    try {

        const {userId} = req.body        
        const orders = await Order.find({userId})    
        console.log(orders);
            
        res.json({success:true,orders})
        
    } catch (error) {
        res.json({success:false,message:(error as Error).message}) 
    }
}

// Admin

export const allOrders = async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
}
export const updateOrder = async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
}