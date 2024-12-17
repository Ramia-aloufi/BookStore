import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { data } from "../config/data";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error("not authorization");
    const token = authorization.split(" ")[1];

    const tokenDecode = jwt.verify(token, data.jwt);
    const { id } = tokenDecode as { id: string; iat: number };
    req.body.userId = id;
    next();
  } catch (error) {
    res.json({ success: false, message: (error as Error).message });
  }
};
