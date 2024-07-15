import express from "express";
import User from "../model/user.js";
import jwt from "jsonwebtoken";

const app = express.Router();

app.route("/newuser").post(async (req, res) => {
  console.log(`you hit the newuser route`);
  const { name, email, username, gender, password } = req.body;
  console.log(password);
  try {
    const newUser = await User.create({
      name,
      email,
      gender,
      username,
      password,
    });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "lkjlkjlj");
   const options = {
    // httpOnly: true,
     secure: true, // Set to true if served over HTTPS
     sameSite: "None", // Set appropriate value based on your requirements
     path: "/", // Set appropriately for your use case
   };
    res
      .status(201)
      .cookie("registertoken", token, options)
      .json({ success: true, message: `welcome ${newUser.name} to new app`, token });
  } catch (error) {
    console.log(`Error while creating user ${error}`);
    if (error.name === "ValidationError") {
      // Extract specific validation errors for each field
      const validationErrors = [];
      for (let field in error.errors) {
        validationErrors.push(error.errors[field].message);
      }
      const errorMessage = validationErrors.join(", "); // Concatenate error messages into a single string
      res.status(400).json({ success: false, message: errorMessage });
    } else if (error.code === 11000) {
      // Parse the error message to determine which field caused the duplicate key error
      const errorMessage = error.message.includes("email")
        ? "Email is already registered"
        : error.message.includes("username")
        ? "Username is already taken"
        : error.message.includes(`passowrd`)
        ? "Password is already taken"
        : error.message.includes(`password`)
        ? "password is already taken"
        : "internal server error";
      res.status(400).json({ success: false, message: errorMessage, error });
    } else {
      // For other errors, send the error message from Mongoose
      res.status(400).json({ success: false, message: error.message, error });
    }
  }
});


app.post("/login", async function (req, res) {
  const { username , password } = req.body;
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  }

  else if (!req.body.password) {
    res.json({ success: false, message: "Please enter your Password " });
  }
  else {
    try {
      const user = await User.findOne({ username });
      if (user) {
        if (user.password === password) {
          res.status(200).json({ success: true, message: `welcome back`, user });
          
        } else {
          res.status(400).json({ success: false, message: `email/ username or password is incorrect` });
          
        }
        console.log(user);
      } else {
        res
          .status(400)
          .json({ success: false, message: "Username or email is incorrect " });
      }
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ success: false, message: "User not found", error });
    }
  }
});



export default app;
