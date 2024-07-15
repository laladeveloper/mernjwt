import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="">
        <h1 className=" text-center text-lg font-extrabold mt-10 ">
          Login Form
        </h1>
        <form className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="name"
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border"
          />

          <input
            type="text"
            placeholder="password"
            className=" px-3 py-1 my-4 rounded-full border-solid  border-slate-400 border focus:ring-slate-300"
          />
          <button
            type="submit"
            className="text-center text-lg font-bold italic bg-slate-700 rounded-full px-10 py-2  text-white hover:bg-white hover:text-slate-700 hover:border hover:border-slate-700 hover:border-solid transition ease-in-out duration-300 "
          >
            Login
          </button>
        </form>
      </div>
      <Link
        to="/"
        className='flex justify-center my-10'
       // className="text-center text-lg font-bold italic bg-slate-700 rounded-full px-10 py-2  text-white hover:bg-white hover:text-slate-700 hover:border hover:border-slate-700 hover:border-solid transition ease-in-out duration-300 "
      > Move to Home
      </Link>
    </div>
  );
}

export default Login