// import express from "express";
// import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";

// const router = express.Router();

// router.get("/", getPosts);
// router.get("/:id", getPost);
// router.post("/", addPost);
// router.delete("/:id", updatePost);
// router.put("/:id", deletePost);

// export default router;

// import express from "express";
// import PostController from "../controllers/post.js";

// const router = express.Router();
// const postController = new PostController();

// router.get("/posts", (req, res) => postController.getPosts(req, res));
// router.get("/post", (req, res) => postController.getPost(req, res));
// router.post("/post", (req, res) => postController.addPost(req, res));
// router.delete("/post", (req, res) => postController.deletePost(req, res));
// router.put("/post", (req, res) => postController.updatePost(req, res));

// export default router;

import express from "express";
import PostController from "../controllers/post.js";

class PostRouter {
    
    constructor() {
        this.router = express.Router();
        this.postController = new PostController();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get("/posts", (req, res) => this.postController.getPosts(req, res));
        this.router.get("/post", (req, res) => this.postController.getPost(req, res));
        this.router.post("/post", (req, res) => this.postController.addPost(req, res));
        this.router.delete("/post", (req, res) => this.postController.deletePost(req, res));
        this.router.put("/post", (req, res) => this.postController.updatePost(req, res));
    }

    getRouter() {
        return this.router;
    }
}

export default PostRouter;