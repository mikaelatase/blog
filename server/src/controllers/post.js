import DbConnection from "../database/db.js";
import jwt from "jsonwebtoken";

class PostController {

    constructor() {
        this.dbConnection = new DbConnection();
        this.db = this.dbConnection.getConnection();
    }

    getPosts(req, res) {
        const q = req.query.category
            ? "SELECT p.id, p.title, p.`desc`, p.image, p.published_date, p.category, p.author_notes as notes, u.`username` as author FROM posts p JOIN users u ON p.uid = u.id WHERE category =?"
            : "SELECT p.id, p.title, p.`desc`, p.image, p.published_date, p.category, p.author_notes as notes, u.`username` as author FROM posts p JOIN users u ON p.uid = u.id";

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
            "SELECT p.`id`, p.`author_notes` as notes, `username` as author, `title`, p.`desc`, p.`image`, u.`img` AS authorPic, `category`,`published_date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id =?"
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
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("Not authenticated!");
      
        jwt.verify(token, "jwtkey", (err, userInfo) => {
            if (err) return res.status(403).json("Token is not valid!");
            
            if (!req.file) return res.status(400).json("No image uploaded");
          
            const q =
                "INSERT INTO posts(`title`, `desc`, `image`, `category`, `published_date`,`uid`) VALUES (?)";

                const imageUrl = "../uploads/" + req.file.filename;

            const values = [
                req.body.title,
                req.body.desc,
                imageUrl,
                req.body.category,
                new Date(),
                userInfo.id,
            ];
            console.log(values);
    
            this.db.query(q, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json("Post has been created.");
            });
        });
    }
    

    deletePost(req, res) {
        res.json("from controller");
    }

    updatePost(req, res) {
        res.json("from controller");
    }
}

export default PostController;