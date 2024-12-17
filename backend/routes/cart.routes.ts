import express from "express"
import { addToCart, geUserCart, updateCart } from "../controllers/cart.controller"
import { authUser } from "../middleware/auth"
const cartRoute = express.Router()


cartRoute.post("/add",authUser, addToCart)
cartRoute.post("/get",authUser, geUserCart)
cartRoute.post("/update",authUser, updateCart)


export default cartRoute