import React, { Suspense } from "react";
import Login from "./Pages/auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/auth/Signup";
import Home from "./Pages/Home";
import { DNA } from "react-loader-spinner";
import Loading from "./Pages/loading";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
