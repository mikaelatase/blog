import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";

const app =  express();

//express server middleware that allows us to send any json file using a client
app.use(express.json());
app.use(cookieParser());

app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/posts", postRoutes);


app.listen(8800, () => {
    console.log("Server running on port 8800");
})