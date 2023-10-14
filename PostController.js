import Post from "./Post.js";
import {json} from "express";
import PostService from "./PostService.js";
class PostController {
    async create(req, res) {
        try {
            console.log(req.files)
            const post =await PostService.create(req.body,req.files.picture)
            res.json(post)


        } catch (e) {
            res.status(500).json(e)
        }

    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const posts = await PostService.getOne(req.params.id);
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async update(req, res) {
        try {
            const update = await PostService.update(req.body);
            // const update = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return res.json(update)

        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    async delete(req, res) {
        try {
            const post = req.params
            if (!post.id) {
                res.status(400).json({message: "Id not writing"})
            }
            const update = await PostService.delete(req.params)
            return res.json(update)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()