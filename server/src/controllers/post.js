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
            if (err) {
                console.error("Error executing SQL query:", err);
                return res.status(500).send("Internal Server Error");
            }
    
            return res.status(200).json(data);
        });
    }
    

    getPost(req, res) {
        const q =
            "SELECT p.id, `username` as author, `title`, p.`desc`, p.image, u.img AS authorPic, `category`,`published_date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id =?"
        this.db.query(q, [req.params.id], (err, data) => {
            if (err) {
                console.error("Error executing SQL query:", err);
                return res.status(500).json(err);
            }
    
            if (data.length === 0) {
                return res.status(404).json({ error: "Post not found" });
            }
    
            return res.status(200).json(data[0]);
        });
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