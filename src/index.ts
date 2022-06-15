
import App from "./app";
import "module-alias/register";
import PostController from "./resources/post/post.controller";
import PostService from "./resources/post/post.service";



const app = new App(Number(process.env.PORT), [new PostController(new PostService())])

app.listen()