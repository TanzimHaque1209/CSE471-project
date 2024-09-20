// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./components/home";
import Course from "./components/Course";
import Courses from "./courses/courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
