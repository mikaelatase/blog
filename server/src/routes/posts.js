import express from "express";
import PostController from "../controllers/post.js";
import { uploadPicture } from "../middlewares/uploadPictureMiddleware.js";

const upload = uploadPicture.single("image");

class PostRouter {

    constructor() {
        this.router = express.Router();
        this.postController = new PostController();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get("/blogs/:category", (req, res) => this.postController.getPosts(req, res));
        this.router.get("/blog/:id", (req, res) => this.postController.getPost(req, res));
        this.router.post("/blogs", upload, (req, res) => this.postController.addPost(req, res));
        this.router.delete("/post", (req, res) => this.postController.deletePost(req, res));
        this.router.put("/post", (req, res) => this.postController.updatePost(req, res));
    }

    getRouter() {
        return this.router;
    }
}

export default PostRouter;