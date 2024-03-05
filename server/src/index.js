import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import PostRouter from "./routes/posts.js";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/auth.js";

class Server {
    constructor() {
        this.app = express();
        this.port = 5000;
        this.start();
        this.initExpressMiddlewares();
        this.initRoutes();
        this.get();
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    initExpressMiddlewares() {
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    initRoutes() {
        this.app.use("/server/users", userRoutes);

        // Initialize AuthRouter
        const authRouter = new AuthRouter();
        this.app.use("/server/auth", authRouter.getRouter());

        // Initialize PostRouter
        const postRouter = new PostRouter();
        this.app.use("/server/posts", postRouter.getRouter());
    }

    get() {
        this.app.get("/", (req, res) => {
            res.json("Hello this is the backend");
        });
    }
}

new Server();