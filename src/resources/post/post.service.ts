import Post from "./post.interface"
import PostModel from "./post.model"


class PostService {

    private post = PostModel


    public async createPost(body: { title: string, description: string }):Promise<Post> {

        console.log("Inside service")
        try {
            const post = await this.post.create({
                title: body.title,
                description: body.description
            })
            return post
        } catch (error: any) {
            throw new Error(error)
        }
    }

    public async readPost() {
        try {
            const postAll = await this.post.find()
            return postAll
        } catch (error: any) {
            throw new Error(error)
        }
    }



    public async updatePost(id: string, body: { title: string, description: string }) {

        console.log("Inside service")
        try {
            const post = await this.post.findByIdAndUpdate(id, body, { new: true })
            return post
        } catch (error: any) {
            throw new Error(error)
        }
    }

    public async deletePost(id: string) {
        try {
            const deletedPost = await this.post.findByIdAndRemove(id)
            return deletedPost
        } catch (error: any) {
            throw new Error(error)
        }
    }


}

export default PostService