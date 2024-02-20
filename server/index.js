import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import { db } from "./db.js";

const app =  express();

//express server middleware that allows us to send any json file using a client
app.use(express.json());
app.use(cookieParser());

app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/posts", postRoutes);


app.get("/", (req, res) => {
    res.json("Hello this is the backend");
})


app.listen(5000, () => {
    console.log("Server running on port 5000");
})