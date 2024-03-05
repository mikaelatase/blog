import DbConnection from "../database/db.js";

class PostController {

    constructor() {
        this.dbConnection = new DbConnection();
        this.db = this.dbConnection.getConnection();
    }

    getPosts(req, res) {
        const q = req.query.category
            ? "SELECT * FROM posts WHERE category = ?"
            : "SELECT * FROM posts";

        this.db.query(q, [req.query.category], (err, data) => {
            if (err) return res.status(500).send(err);

            return res.status(200).json(data);
        });
    }

    getPost(req, res) {
        res.json("from controller");
    }

    addPost(req, res) {
        res.json("from controller");
    }

    deletePost(req, res) {
        res.json("from controller");
    }

    updatePost(req, res) {
        res.json("from controller");
    }
}

export default PostController;