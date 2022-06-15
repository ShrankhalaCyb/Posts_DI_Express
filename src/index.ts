import 'reflect-metadata'
import App from "./app";
import "module-alias/register";
import PostController from "./resources/post/post.controller";
import PostService from "./resources/post/post.service";



// const postControllerObj = new PostController(new PostService())
const app = new App(Number(process.env.PORT))

app.listen()