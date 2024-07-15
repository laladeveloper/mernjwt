// type module 
import { mongoose } from "mongoose";

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    unique: [true,"password already taken"],
    minLength:[8, "Password should be greater or equal to 8  characters"]
  },
  username: {
    type: String,
    unique: [true, "username already taken" ],
    required: [true, "Please enter your username"],
  },
  dob: { type: Date },
  gender: {
    type: String,
    required: [true, "please enter your gender"],
  },
  role: {
    type: String,
    default: "user",
  },
});

// type module
const User = mongoose.model("User", UserSchema);
export default User;
