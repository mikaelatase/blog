import express from "express";
import AuthController from "../controllers/auth.js";

class AuthRouter {

    constructor() {
        this.router = express.Router();
        this.authController = new AuthController();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post("/register", (req, res) => this.authController.register(req, res));
        this.router.post("/login", (req, res) => this.authController.login(req, res));
        this.router.post("/logout", (req, res) => this.authController.logout(req, res));
    }

    getRouter() {
        return this.router;
    }
}

export default AuthRouter;