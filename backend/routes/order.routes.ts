
import express from "express"
import { allOrders, placeOrderCOD, placeOrderStripe, updateStatus, userOrder, verifyStripe } from "../controllers/order.controller"
import { isAdmin } from "../middleware/adminAuth"
import { authUser } from "../middleware/auth"
const orderRoute = express.Router()

//for admin
orderRoute.post("/list",isAdmin,allOrders)
orderRoute.post("/status",isAdmin,updateStatus)
//for payment
orderRoute.post("/place",authUser,placeOrderCOD)
orderRoute.post("/stripe",authUser,placeOrderStripe)
//verify
orderRoute.post("/verify",verifyStripe)
// for user
orderRoute.post("/user",authUser,userOrder)


export default orderRoute