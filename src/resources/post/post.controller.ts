import Controller from "../../utils/interfaces/controller.interface";
import { NextFunction, Request, Response, Router } from "express";
import PostService from "./post.service";
import HttpException from "../../utils/exceptions/http.exception";

// contains biz logic

//  const postServiceObj = new PostService()

class PostController  implements Controller{

    public path = '/posts'
    public router = Router()
private postServiceObj:PostService
    
    constructor(  postService:PostService) {
        
        this.initialRoutes()
         
        this.postServiceObj = postService
    }

    private initialRoutes():void {
        this.router.post(`${this.path}`, this.createPost)
        this.router.get(`${this.path}`,this.readPost)
        this.router.delete(`${this.path}/:id`, this.deletePost)
        this.router.put(`${this.path}/:id`, this.updatePost)
    }

    private async createPost(req: Request, res: Response,next:NextFunction) {
        
        try {

            // this.postService = new PostService()
            
            const { title, description } = req.body
            console.log(title,description)
            // const post = await postService.createPost(req.body)
            const post = await this.postServiceObj.createPost(req.body)
            res.status(201).send(post)
        } catch (error:any) {
             next(new HttpException(400,error.message))
            //  res.status(400).send(error)
             console.log(error)
        }

    }

    private async readPost(req: Request, res: Response){
        // this.postService = new PostService()
            try {
            //   this.postService= new PostService()
                // const posts = await postService.readPost()
                const posts = await this.postServiceObj.readPost()
                res.status(201).send(posts)
            } catch (error:any) {
                res.status(400).send(error)
                console.log(error)
            }
    }

    private async updatePost(req: Request, res: Response,next:NextFunction) {

        try {

            const { title, description } = req.body
            console.log(title, description)
            // const post = await postService.updatePost(req.params.id,req.body)
            const post = await this.postServiceObj.updatePost(req.params.id, req.body)
            res.status(201).send(post)
        } catch (error: any) {
            next(new HttpException(400, error.message))
            //  res.status(400).send(error)
            console.log(error)
        }

    }

    private async deletePost(req: Request, res: Response) {
        try {
            // const posts = await postService.deletePost(req.params.id)
            const posts = await this.postServiceObj.deletePost(req.params.id)
            res.status(201).send(posts)
        } catch (error: any) {
            res.status(400).send(error)
            console.log(error)
        }
    }

}

export default PostController