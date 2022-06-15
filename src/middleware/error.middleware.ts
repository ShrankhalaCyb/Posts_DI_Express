import HttpException from "@/utils/exceptions/http.exception";
import { NextFunction, Request, Response } from "express";




function errorMiddleware(error:HttpException,req:Request,res:Response,next:NextFunction) : void {
    const status : number = error.status || 500
    const message : string = error.message || "Something went wrong for the user"

    res.status(status).send(message)
    next()
}

export default errorMiddleware