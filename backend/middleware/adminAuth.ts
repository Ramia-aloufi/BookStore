import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { data } from "../config/data";

export const isAdmin = (req:Request,res:Response,next:NextFunction ) => {
    try {
        const {authorization} = req.headers
        if(!authorization) throw new Error("not authorization")
        const tokenDecode = jwt.verify(authorization,data.jwt)
      if(tokenDecode !== data.admin.email+data.admin.password) throw new Error(" not   authorization")
    next()
        
    } catch (error) {
        console.log((error as Error).message);
        res.json({
          success: false,
          message: (error as Error).message || "An unexpected error occurred",
        });
    }

}