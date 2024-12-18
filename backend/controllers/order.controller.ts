import { Request, Response } from "express"
import { data } from "../config/data"
import Order from "../models/order.model"
import { User } from "../models/user.model"
import Stripe from "stripe"
import { OrderItem } from "../models/order.type"

const currency ="usd"
const deliveryCharges = 10



const stripe = new Stripe(data.dev.stripe_key)

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
        const {userId,items,address,amount} = req.body
        const {origin} = req.headers

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"Stripe",
            payment:false,
            date:Date.now()
        }
        const order = new Order(orderData)
        await order.save()
        const line_item = items.map((item:OrderItem)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name
                },
                unit_amount:item.price * 100 * 277
            },
            quantity:item.quantity

        }))
        line_item.push({
            price_data:{
                currency:currency,
                product_data:{
                    name:"Deliver charges" 
                },
                unit_amount:deliveryCharges * 100 * 277
            },
            quantity:1
        })
        const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${order._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${order._id}`,
            line_items:line_item,
            mode:"payment"
        })
        console.log(session);
        
        res.json({success:true,session_url:session.url})
        
    } catch (error) {
        res.json({success:false,message:(error as Error).message})

    }
}
export const verifyStripe = async(req:Request,res:Response)=>{
    const {userId,orderId,success} = req.body
    try {
        if(success==="true"){
            await Order.findByIdAndUpdate(orderId,{payment:true})
            await User.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true,message:""})

        }else{
            await Order.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        res.json({success:false,message:(error as Error).message})
    }
}

export const userOrder = async(req:Request,res:Response)=>{
    try {
        const {userId} = req.body        
        const orders = await Order.find({userId})                
        res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:(error as Error).message}) 
    }
}

// Admin

export const allOrders = async(req:Request,res:Response)=>{
    try {
        const orders = await Order.find({})
        res.json({success:true,orders})
        
    } catch (error) {
        res.json({success:false,message:(error as Error).message})
        
    }
}
export const updateStatus = async(req:Request,res:Response)=>{
    try {
        const {orderId,status} = req.body
        await Order.findOneAndUpdate({_id:orderId},{status})
        res.json({success:true,message: "Status updated"})
        
    } catch (error) {
        
    }
}