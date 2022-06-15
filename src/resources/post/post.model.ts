import  mongoose  from 'mongoose';
import Post from './post.interface';


const PostSchema = new mongoose.Schema({
    title : {type:String,required:true},
    description: { type: String, required: true }
})

const PostModel = mongoose.model<Post>('Post',PostSchema)

export default PostModel