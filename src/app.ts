import PostController from "./resources/post/post.controller";

import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware";
import Controller from "./utils/interfaces/controller.interface";
import PostService from "./resources/post/post.service";
import Container from "typedi";




class App {

    public express: Application;
    public port: number 
    private postController = Container.get(PostController)
    constructor(port: number) {
        this.express = express()
        this.port = port
        this.initialiseDBConnection()
        this.initialiseMiddleware()
        this.initialiseControllers()
        this.initialiseErrorHandlingMiddleware()
    }

    private initialiseMiddleware(): void {
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))

    }
    /**
     * initialiseErrorHandlingMiddleware
     */
    public initialiseErrorHandlingMiddleware() {
        this.express.use(errorMiddleware)
    }

    /**
     * initialiseControllers
     */
    public initialiseControllers():void {
    //    controllers.forEach((c:Controller) => {
    //     this.express.use('/api',c.router)
    //    })
    console.log("inside initialise controllers")
        this.express.use('/api',this.postController.router)

    }

    /* 
    *  
    */
    private initialiseDBConnection(): void {
        const dbUri = "mongodb://localhost/youtube-project"
        mongoose.connect(`${dbUri}`)
            .then(() => console.log("DB Connected"))
            .catch((err) => console.log(err.message))
    }

    public listen(): void {
        this.express.listen(5001, () => {
            console.log(`Server started on port : 5001`)
        })
    }
}

export default App