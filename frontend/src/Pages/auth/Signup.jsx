import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../../app/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { clearMsgs } from "../../app/reducers";

const Signup = () => {
  const successMsg = useSelector((state) => state.user.success);
  const failureMsg = useSelector((state) => state.user.failure);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State to hold user data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    gender: "",
    dob: "",
    password: "",
  });

  // Function to handle input changes and update userData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { name, username, email, dob, password } = userData; // Destructure userData

    if (!name || !username || !email || !dob || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    // Dispatch the registerRequest action with userData
    dispatch(registerRequest(userData));

    // If registration is successful, set success message and redirect to home page
    // toast.success("Registration successful");
    // navigate("/"); // Redirect to home page
  } catch (error) {
    // If registration fails, set error message
    console.log(error);
    toast.error(error.message || "Registration failed. Please try again.");
  }
};

  useEffect(() => {
    if (successMsg) {
      console.log(successMsg);
      toast.success(successMsg);
      navigate("/");
    }

    if (failureMsg) {
      console.log(failureMsg);
      toast.error(failureMsg);
    }
    dispatch(clearMsgs());

    // Dispatch clearMsgs after 5 seconds
    // const timeoutId = setTimeout(() => {
    //   dispatch(clearMsgs());
    // }, 5000);

    // Clear the timeout when the component unmounts or when the dependencies change
    // return () => clearTimeout(timeoutId);
  }, [successMsg, failureMsg]);

  return (
    <div>
      <div className="">
        <h1 className=" text-center text-lg font-extrabold mt-10 ">
          Register Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            value={userData.name}
            onChange={handleChange}
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border"
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={userData.username}
            onChange={handleChange}
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={userData.email}
            onChange={handleChange}
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border"
          />
          <input
            type="text"
            name="gender"
            placeholder="gender"
            value={userData.gender}
            onChange={handleChange}
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border"
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={userData.password}
            onChange={handleChange}
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border focus:ring-slate-300"
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={userData.dob}
            onChange={handleChange}
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border focus:ring-slate-300"
          />
          <button
            type="submit"
            className="text-center text-lg font-bold italic bg-slate-700 rounded-full px-10 py-2  text-white hover:bg-white hover:text-slate-700 hover:border hover:border-slate-700 hover:border-solid transition ease-in-out duration-300 "
          >
            Sign Up
          </button>
        </form>
      </div>
      <Link
        to="/"
        className="flex justify-center my-10"
        // className="text-center my-4 text-lg font-bold italic bg-slate-700 rounded-full px-10 py-2  text-white hover:bg-white hover:text-slate-700 hover:border hover:border-slate-700 hover:border-solid transition ease-in-out duration-300 "
      >
        Home
      </Link>
    </div>
  );
};

export default Signup;
