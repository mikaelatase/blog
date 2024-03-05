// import DbConnection from "../database/db.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const connectDB = new DbConnection();
// const db = connectDB.getConnection();

// export const register = (req, res) => {
//     //CHECK EXISTING USER
//     const q = "SELECT * FROM users WHERE email = ? OR username = ?";

//     db.query(q, [req.body.email, req.body.username], (err, data) => {
//       if (err) return res.status(500).json({ message: "Internal server error" });
//       if (data.length) return res.status(409).json({ message: "User already exists!" });
  
//       //Hash the password and create a user
//       const salt = bcrypt.genSaltSync(10);
//       const hash = bcrypt.hashSync(req.body.password, salt);
  
//       const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
//       const values = [req.body.username, req.body.email, hash];
  
//       db.query(q, [values], (err, data) => {
//         if (err) return res.status(500).json({ message: "error" });
//         return res.status(200).json({ message: "User has been created." });
//       });
//     });
// };
  

// export const login = (req, res) => {
//     //CHECK USER
  
//     const q = "SELECT * FROM users WHERE username = ?";
  
//     db.query(q, [req.body.username], (err, data) => {
//         if (err) return res.status(500).json({ message: "Internal server error" });
//       if (data.length === 0) return res.status(404).json({message: "User not found!"});
  
//       //Check password
//       const isPasswordCorrect = bcrypt.compareSync(
//         req.body.password,
//         data[0].password
//       );

//       console.log(req.body.password);
  
//       if (!isPasswordCorrect)
//         return res.status(400).json({message:"Wrong username or password!"});
  
//       const token = jwt.sign({ id: data[0].id }, "jwtkey");
//       const { password, ...other } = data[0];
  
//       res
//         .cookie("access_token", token, {
//           httpOnly: true,
//         })
//         .status(200)
//         .json(other);
//     });
//   };
  

// export const logout = (req, res) => {
//   res.clearCookie("access_token",{
//     sameSite:"none",
//     secure:true
//   }).status(200).json("User has been logged out.");
// };

import DbConnection from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {

    constructor() {
        this.dbConnection = new DbConnection();
        this.db = this.dbConnection.getConnection();
    }

    register(req, res) {
        const q = "SELECT * FROM users WHERE email = ? OR username = ?";
        this.db.query(q, [req.body.email, req.body.username], (err, data) => {
            if (err) return res.status(500).json({ message: "Internal server error" });
            if (data.length) return res.status(409).json({ message: "User already exists!" });

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const insertQuery = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
            const values = [req.body.username, req.body.email, hash];

            this.db.query(insertQuery, [values], (err, data) => {
                if (err) return res.status(500).json({ message: "error" });
                return res.status(200).json({ message: "User has been created." });
            });
        });
    }

    login(req, res) {
        const q = "SELECT * FROM users WHERE username = ?";
        this.db.query(q, [req.body.username], (err, data) => {
            if (err) return res.status(500).json({ message: "Internal server error" });
            if (data.length === 0) return res.status(404).json({ message: "User not found!" });

            const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

            if (!isPasswordCorrect)
                return res.status(400).json({ message: "Wrong username or password!" });

            const token = jwt.sign({ id: data[0].id }, "jwtkey");
            const { password, ...other } = data[0];

            res.cookie("access_token", token, { httpOnly: true })
                .status(200)
                .json(other);
        });
    }

    logout(req, res) {
        res.clearCookie("access_token", { sameSite: "none", secure: true })
            .status(200)
            .json("User has been logged out.");
    }
}

export default AuthController;