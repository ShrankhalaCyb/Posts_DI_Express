import { NextFunction, Request, RequestHandler, Response } from "express";
import Joi from "joi";

function validationMiddleware(schema:Joi.Schema) :RequestHandler {
    
    return async(req:Request,res:Response,next:NextFunction):Promise<void> => {
        
    }

}