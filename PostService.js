import Post from "./Post.js";
import post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
    async create(post,pic) {
       const fileName = fileService.saveFile(pic)
            const createPost = await Post.create({...post, picture: fileName})
          return createPost


    }

    async getAll() {
            const posts = await Post.find();
            return posts

    }

    async getOne(id) {


            if (!id) {
            throw new Error("Id not writing")
            }

            const posts = await Post.findById(id);
            return posts

    }

    async update(post) {
            if (!post._id) {
                throw new Error("Id not writing")
            }
            const update = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return update


    }

    async delete(post) {

            // const post = req.params
            if (!post.id) {
                throw new Error("Id not writing")
            }
            const update = await Post.findByIdAndDelete(post.id);
            return update
    }
}
export default new PostService()