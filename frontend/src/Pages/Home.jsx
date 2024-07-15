import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DNA } from "react-loader-spinner";
const Home = () => {
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const auth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = useState(auth);
  const [isLoading, setIsLoading] = useState(loading);

  return (
    <div>
      <h1 className=" text-center text-lg font-extrabold mt-10 ">Home Page</h1>

      <div className="user">
        <Suspense
          fallback={
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          }
        >
          <h2 className=" text-center text-lg mt-10 "> { user && user.name} </h2>
        </Suspense>
      </div>

      <div className="flex justify-center my-4 ">
        <Link
          to="/login"
          className="text-center mx-2  text-lg font-bold italic bg-slate-700 rounded-full px-10 py-2  text-white hover:bg-white hover:text-slate-700 hover:border hover:border-slate-700 hover:border-solid transition ease-in-out duration-300 "
        >
          {" "}
          Login{" "}
        </Link>
        <Link
          to="/signup"
          className="text-center mx-2  text-lg font-bold italic bg-slate-700 rounded-full px-10 py-2  text-white hover:bg-white hover:text-slate-700 hover:border hover:border-slate-700 hover:border-solid transition ease-in-out duration-300 "
        >
          {" "}
          Register{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
